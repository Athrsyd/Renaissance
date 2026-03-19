import { Link } from "react-router-dom";
import Logo from "../assets/Logo2.png"

const navIcon = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="40px"
        className="ml-6 cursor-pointer hover:text-icon"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M6.133 21C4.955 21 4 20.02 4 18.81v-8.802c0-.665.295-1.295.8-1.71l5.867-4.818a2.09 2.09 0 0 1 2.666 0l5.866 4.818c.506.415.801 1.045.801 1.71v8.802c0 1.21-.955 2.19-2.133 2.19z" />
          <path d="M9.5 21v-5.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2V21" />
        </g>
      </svg>
    ),
    text: "Home",
    path: "/dashboard"
  },

  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        className="ml-5.5 cursor-pointer hover:text-icon"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M104 36H56a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M52 76h56v104H52Zm4-32h48a4 4 0 0 1 4 4v20H52V48a4 4 0 0 1 4-4m48 168H56a4 4 0 0 1-4-4v-20h56v20a4 4 0 0 1-4 4m123.74-16.62L194.55 37.57a12 12 0 0 0-14.25-9.3l-46.81 10.05a12.1 12.1 0 0 0-9.23 14.3l33.19 157.81a12 12 0 0 0 14.25 9.3l46.81-10.06a12.08 12.08 0 0 0 9.23-14.29m-83.21-85.27l54.63-11.73l15 71.07l-54.63 11.74Zm-6.64-31.56l54.64-11.74l5 23.74l-54.64 11.73Zm-2.71-32.4L182 36.09a4 4 0 0 1 .84-.09a3.94 3.94 0 0 1 2.14.64a4 4 0 0 1 1.76 2.58L190.88 59l-54.64 11.72L132.09 51a4.07 4.07 0 0 1 3.09-4.85m81.65 155.7L170 211.91a4 4 0 0 1-3-.55a4 4 0 0 1-1.76-2.58L161.12 189l54.64-11.73l4.15 19.73a4.07 4.07 0 0 1-3.08 4.85"
        />
      </svg>
    ),
    text: "Academy",
    path: "/academy"
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35px"
        height="35px"
        className="ml-5.5 cursor-pointer hover:text-icon"
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
    ),
    text: "Aureus",
    path: "/chatbot"
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        className="ml-6 cursor-pointer hover:text-icon"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.9 9.9 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8"
        />
      </svg>
    ),
    text: "Community",
    path: "/community"
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="30px"
        className="ml-6 cursor-pointer hover:text-icon"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M19.875 6.27A2.23 2.23 0 0 1 21 8.218v7.284c0 .809-.443 1.555-1.158 1.948l-6.75 4.27a2.27 2.27 0 0 1-2.184 0l-6.75-4.27A2.23 2.23 0 0 1 3 15.502V8.217c0-.809.443-1.554 1.158-1.947l6.75-3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98z" />
          <path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0" />
        </g>
      </svg>
    ),
    text: "Settings",
  },
];

const SidebarIcon = ({ item }) => {
  return (
    <>
      <div className="relative group -ml-4 lg:-ml-5 lg:mb-9 md:mb-11 md:-ml-5">
        {item.icon}
        <span
          className="hidden lg:block md:block absolute left-16 top-1/2 lg:-translate-y-7 md:-translate-y-7
          bg-icon text-white text-sm px-3 py-0.5 rounded-r-full rounded-tl-full rounded-bl-sm
          opacity-0 group-hover:opacity-100 transition"
        >
          {item.text}
        </span>
      </div>
    </>
  );
};

const SideBar = () => {
  return (
    <aside className="fixed bottom-0 left-0 w-full z-1000 h-16 bg-white border-t lg:top-0 lg:left-0 lg:h-screen lg:w-20 lg:border-r lg:border-t-0 md:top-0 md:left-0 md:h-screen md:w-20 md:border-r md:border-t-0">
      <div className="flex w-full h-full flex-row justify-around items-center lg:flex-col lg:items-center md:py-6 md:flex-col md:items-center md:pr-2">
        {/* Logo (hanya desktop) */}
        <img src={Logo} className="hidden lg:block md:block ml-1 w-[90%]" />
        
        {navIcon.map((item) => (
          <Link to={item.path} key={item.id}>
            <SidebarIcon key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
