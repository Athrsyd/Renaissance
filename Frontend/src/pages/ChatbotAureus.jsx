import { Link } from "react-router-dom";
import NavDashboard from "../components/NavDasboard"
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import WelcomeAureus from "../components/WelcomeAureus";
import Knowledge from "../Data/knowledge.json"
import HookAuth from "../Hook/HookAuth"
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
import { useUser } from "../Context/UserContext";

export default function ChatbotUI() {
  const {user} = useUser();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const typingRef = useRef(null);
  const typeEffect = (text) => {
    let index = 0;

    // ❗ stop typing sebelumnya
    if (typingRef.current) {
      clearInterval(typingRef.current);
    }

    setTypingText("");
    setIsTyping(true);

    typingRef.current = setInterval(() => {
      setTypingText((prev) => prev + text.charAt(index));
      index++;

      if (index >= text.length) {
        clearInterval(typingRef.current);

        setMessages((prev) => [...prev, { role: "assistant", content: text }]);

        setTypingText("");
        setIsTyping(false);
        setLoading(false);
      }
    }, 10);
  };

  const getFromJSON = (input) => {
    const text = input.toLowerCase();

    let bestMatch = null;
    let bestScore = 0;

    Knowledge.forEach((item) => {
      let score = 0;

      item.keywords.forEach((k) => {
        if (text.includes(k)) score++;
      });

      if (score > bestScore) {
        bestScore = score;
        bestMatch = item;
      }
    });

    return bestScore > 0 ? bestMatch.answer : null;
  };

  const [lastSend, setLastSend] = useState(0);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text) => {
    if (!text || loading) return;
    if (text.length < 3) return;

    if (Date.now() - lastSend < 1500) return;
    setLastSend(Date.now());

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // =========================
    // ⚡ LAYER 1: JSON
    // =========================
    const jsonAnswer = getFromJSON(text);

    if (jsonAnswer) {
      setLoading(true);

      setTimeout(() => {
        typeEffect(jsonAnswer);
      }, 200);

      return;
    }

    // =========================
    // 🧠 LAYER 2: AI API
    // =========================
    try {
      const limitedMessages = [...messages, userMessage].slice(-5);

      const geminiMessages = limitedMessages.map((msg) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content }],
      }));

      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [
                {
                  text: "Kamu adalah AI tutor. Jawab singkat, jelas, maksimal 3 kalimat.",
                },
              ],
            },
            contents: geminiMessages,
          }),
        },
      );

      const data = await res.json();

      if (!res.ok) throw new Error("API Error");

      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (textResponse) {
        typeEffect(textResponse);
        setLoading(true)
        setTimeout(() => {
          typeEffect(textResponse);
        }, 600);
        return;
      }

      throw new Error("Empty response");
    } catch (err) {
      console.error(err);

      // =========================
      // 🚫 LAYER 3: FALLBACK
      // =========================
      typeEffect("Maaf, Aureus AI sedang sibuk 😢");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };


  let content;
  if (messages.length === 0) {
    content = (
      <>
        <WelcomeAureus />
      </>
    );
  } else {
    content = (
      <div className="w-full max-w-2xl flex flex-col gap-5 mt-10 lg:mt-5 mb-20 ml-0 lg:ml-5 space-y-3 overflow-y-auto flex-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-10 h-10 mr-2 flex items-center justify-center rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  className="text-coffe"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="1.5"
                    d="m9.96 14.863l.886 3.099c.332 1.16 1.976 1.16 2.308 0l.885-3.099a1.2 1.2 0 0 1 .824-.824l3.099-.885c1.16-.332 1.16-1.976 0-2.308l-3.099-.885a1.2 1.2 0 0 1-.824-.824l-.885-3.099c-.332-1.16-1.976-1.16-2.308 0l-.885 3.099a1.2 1.2 0 0 1-.824.824l-3.099.885c-1.16.332-1.16 1.976 0 2.308l3.099.885a1.2 1.2 0 0 1 .824.824M4.43 19.716l.376 1.508c.05.202.338.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.337 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.338-.202-.388 0l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.337 0 .388l1.508.377a.2.2 0 0 1 .145.145m14.001-14l.376 1.508c.05.202.337.202.388 0l.377-1.508a.2.2 0 0 1 .145-.145l1.508-.377c.202-.05.202-.338 0-.388l-1.508-.377a.2.2 0 0 1-.145-.145l-.377-1.508c-.05-.202-.337-.202-.388 0l-.377 1.508a.2.2 0 0 1-.145.145l-1.508.377c-.202.05-.202.338 0 .388l1.508.377a.2.2 0 0 1 .145.145"
                  />
                </svg>
              </div>
            )}
            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] ${msg.role === "user"
                ? "bg-[#3b2a23] text-white text-sm"
                : "bg-white border"
                }`}
            >
              {msg.role === "assistant" ? (
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-1 text-sm">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc ml-4 text-sm">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal ml-4 text-sm">{children}</ol>
                    ),
                    li: ({ children }) => <li className="mb-1">{children}</li>,
                  }}
                >
                  {msg.content}
                </ReactMarkdown>
              ) : (
                msg.content
              )}
            </div>
            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-icon ml-2 flex items-center justify-center overflow-hidden">
                {/* isi nya disini ya alif */}
                <div className="img w-9 h-9 lg:h-12 lg:w-12 md:h-12 md:w-12 mb-2 bg-bistre rounded-full overflow-hidden">
                  <h1 className="text-white text-center text-lg font-semibold mt-3.5">
                    {user?.name?.charAt(0) || "U"}
                  </h1>
                </div>
              </div>
            )}
          </div>
        ))}

        {loading && !isTyping && (
          <div className="text-gray-400 text-sm">Aureus is typing...</div>
        )}

        {isTyping && (
          <div className="flex justify-start">
            <div className="w-10 h-10 mr-2 flex items-center justify-center rounded-full bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                className="text-coffe"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="m9.96 14.863l.886 3.099..."
                />
              </svg>
            </div>

            <div className="px-4 py-2 rounded-2xl max-w-[70%] bg-white border">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-1 text-sm">{children}</p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc ml-4 text-sm">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal ml-4 text-sm">{children}</ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                }}
              >
                {typingText}
              </ReactMarkdown>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>
    );
  }

  return (
    <>
      <div className="h-screen lg:mt-0 mt-2 bg-white relative flex flex-col">
        {/* Header */}
        <aside className=" p-0 lg:p-4 fixed lg:top-0 lg:left-0 h-10 lg:h-screen w-40 lg:border-r-2 border-t-0">
          <Link to="/dashboard">
            <button className="lg:bg-[#3b2a23] transition-all duration-300 hover:-translate-x-1 flex flex-row items-center gap-2 ml-0 lg:ml-1 text-[#3b2a23] lg:text-white px-6 py-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                className=""
              >
                <path
                  fill="currentColor"
                  d="M21 11H6.414l5.293-5.293l-1.414-1.414L2.586 12l7.707 7.707l1.414-1.414L6.414 13H21z"
                ></path>
              </svg>
              Back
            </button>
          </Link>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col items-center ml-2 gap-5 lg:ml-20 mb-10 -mt-5 lg:mt-0 justify-center px-4">
          {content}
        </div>

        {/* Input */}
        <div className="container fixed flex flex-col mx-auto w-full md:left-20 lg:left-53 bottom-0 right-0 bg-white">

          <form
            onSubmit={handleSubmit}
            className=" flex bg-white items-center w-9/10 mx-auto md:mx-0 md:w-[90%] lg:w-[80%] lg:left-53 bottom-10 gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Aureus..."
              className="flex-1 border rounded-xl px-4 py-2 outline-none border-icon ring-1 ring-icon outline-icon"
            />
            <button type="submit" className="hover:translate-x-1 hover:-translate-y-1 hover:-rotate-12 transition-all ease-in-out duration-300" disabled={loading}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                className="text-icon"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.291 3.309a.75.75 0 0 0-.976.996l3.093 6.945H13a.75.75 0 0 1 0 1.5H5.408l-3.093 6.945a.75.75 0 0 0 .976.996l19-8a.75.75 0 0 0 0-1.382z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
          <div className="relative w-4/5 mx-auto right-0 md:right-10 lg:right-30 pt-2 text-center">
            <p className="text-center text-bistre/70 text-xs md:text-sm mb-4">
              Aereus AI bisa menghasilkan jawaban yang tidak selalu benar
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
