import { Link } from "react-router-dom";
import NavDashboard from "../components/NavDasboard"
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


export default function ChatbotUI() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  const quickQuestions = [
    "Apa itu pecahan dan bagaimana cara menghitungnya?",
    "Apa fungsi sistem pernapasan pada manusia?",
    "Apa itu hukum Newton dan bagaimana penerapannya?",
  ];

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

const sendMessage = async (text) => {
  if (!text) return;

  const userMessage = { role: "user", content: text };
  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  const newMessages = [...messages, userMessage];

  // Format ulang ke struktur Gemini
  const geminiMessages = newMessages.map((msg) => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }],
  }));

  try {
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
                text: "Kamu adalah AI tutor. Jawab dengan singkat, jelas, dan padat. Maksimal 3-4 kalimat per jawaban.",
              },
            ],
          },
          contents: geminiMessages,
        }),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("API ERROR:", data);
      return;
    }

    const botMessage = {
      role: "assistant",
      content:
        data.candidates?.[0]?.content?.parts?.[0]?.text || "Error response",
    };

    setMessages((prev) => [...prev, botMessage]);
  } catch (err) {
    console.error("FETCH ERROR:", err);
  } finally {
    setLoading(false);
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
        {/* Title */}
        <div className="flex flex-col justify-center items-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="50px"
            className="text-icon"
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
          <h1 className="text-2xl font-semibold font-monstserrat">
            Selamat Datang di <span className="text-[#c9a77c]">Aureus AI</span>
          </h1>
          <p className="text-black text-sm font-semibold mt-2 max-w-xl font-monstserrat">
            Jelajahi pengetahuan bersama Aureus. Ajukan pertanyaan, pahami
            konsep yang sulit, dan temukan cara belajar yang lebih efektif
            dengan bantuan AI.
          </p>
        </div>

        {/* Quick Questions */}
        <div className="flex flex-col mt-6 justify-center items-center">
          <div className="bg-icon/20 px-4 py-1 rounded-xl">
            <h1 className="font-bold text-center text-bistre">
              Quick Question
            </h1>
          </div>

          <div className="w-full max-w-2xl bg-bistre p-4 rounded-2xl space-y-2">
            {quickQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="w-full bg-icon/20 backdrop-blur-md shadow-lg text-white py-2 rounded-full text-sm font-semibold hover:bg-[#6b4a3c]"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    content = (
      <div className="w-full max-w-2xl flex flex-col gap-5 mt-5 mb-20 ml-5 space-y-3 overflow-y-auto flex-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[70%] ${
                msg.role === "user"
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
          </div>
        ))}

        {loading && (
          <div className="text-gray-400 text-sm">Aureus is typing...</div>
        )}

        <div ref={bottomRef} />
      </div>
    );
  }

  return (
    <>
      <div className="h-screen bg-white relative flex flex-col">
        {/* Header */}
        <aside className="p-4 fixed lg:top-0 lg:left-0 lg:h-screen w-40 border-r-2 border-t-0">
          <Link to="/dashboard">
            <button className="bg-[#3b2a23] flex flex-row items-center gap-2 ml-1 text-white px-6 py-2 rounded-full">
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
        <div className="flex-1 flex flex-col items-center ml-20 mb-10 justify-center px-4">
          {content}
        </div>

        {/* Input */}
        <form
          onSubmit={handleSubmit}
          className=" fixed p-4 flex bg-white items-center w-[80%] right-10 bottom-0 gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Aureus..."
            className="flex-1 border rounded-xl px-4 py-2 outline-none border-icon ring-1 ring-icon outline-icon"
          />
          <button type="submit">
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
      </div>
    </>
  );
}
