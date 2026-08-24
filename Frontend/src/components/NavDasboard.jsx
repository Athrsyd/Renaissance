import { Link, useLocation } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Sparkles,
  MessageCircle,
  Clock,
  LogOut,
  ChevronRight,
} from "lucide-react";
import Logo from "../assets/Logo2.png";
import HookAuth from "../Hook/HookAuth";

const navIcon = [
  {
    id: 1,
    icon: <Home size={22} strokeWidth={1.8} />,
    text: "Dashboard",
    path: "/dashboard",
  },
  {
    id: 2,
    icon: <GraduationCap size={22} strokeWidth={1.8} />,
    text: "Academy",
    path: "/academy",
  },
  {
    id: 3,
    icon: <Sparkles size={22} strokeWidth={1.8} />,
    text: "Aureus AI",
    path: "/chatbot",
  },
  {
    id: 4,
    icon: <MessageCircle size={22} strokeWidth={1.8} />,
    text: "Community",
    path: "/community",
  },
  {
    id: 5,
    icon: <Clock size={22} strokeWidth={1.8} />,
    text: "Progress",
    path: "/progress",
  },
];

const SidebarIcon = ({ item, isActive }) => {
  return (
    <div
      className={`flex w-full cursor-pointer rounded-2xl transition duration-300 p-2.5 lg:px-4 flex-row justify-center lg:justify-start items-center gap-3
      ${isActive ? "bg-khaki text-white" : "text-beige/80 hover:bg-khaki/60 hover:text-white"}`}
    >
      <span className="shrink-0">{item.icon}</span>
      <h1 className="hidden lg:block text-start text-sm font-medium">
        {item.text}
      </h1>
    </div>
  );
};

const SideBar = () => {
  const location = useLocation();
  const { handleLogout } = HookAuth();

  const isItemActive = (path) => {
    const base = path.split("#")[0];
    return location.pathname === base;
  };

  return (
    <aside
      className="fixed bottom-0 left-0 w-full z-1000 h-16 bg-bistre border-t border-khaki/30
      lg:top-0 lg:left-0 lg:h-screen lg:w-64 lg:border-r lg:border-t-0
      md:top-0 md:left-0 md:h-screen md:w-20 md:border-r md:border-t-0"
    >
      <div className="flex w-full h-full flex-row md:justify-start justify-around items-center lg:flex-col lg:items-stretch lg:py-6 lg:px-4 md:py-6 md:flex-col md:items-center">
        {/* Logo (hanya desktop) */}
        <Link
          to="/"
          className="hidden lg:flex items-center gap-2 px-2 mb-6 text-white font-semibold"
        >
          <img src={Logo} alt="logo" className="w-9 h-9 object-contain" />
          <h1 className="text-lg font-monstserrat">Renaissance</h1>
        </Link>

        <div className="hidden lg:block w-full h-px bg-khaki/40 mb-4"></div>

        {/* Nav items */}
        <nav className="flex flex-row md:flex-col lg:flex-col justify-around md:justify-start lg:justify-start items-center lg:items-stretch w-full gap-1 lg:gap-1.5">
          {navIcon.map((item) => (
            <Link to={item.path} key={item.id} className="w-full">
              <SidebarIcon item={item} isActive={isItemActive(item.path)} />
            </Link>
          ))}
        </nav>

        {/* Spacer pushes promo + logout to bottom (desktop only) */}
        <div className="hidden lg:block flex-1" />

        {/* Promo box */}
        <div className="hidden lg:flex flex-col bg-beige border border-khaki/30 rounded-2xl p-4 mb-4 gap-3">
          <p className="text-bistre text-sm leading-snug">
            Jelajahi dunia pengetahuan baru setiap hari
          </p>
          <Link to="/academy">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-1 bg-bistre hover:bg-chamoisee transition duration-300 text-white text-xs font-semibold rounded-xl px-3 py-2"
            >
              Jelajahi Sekarang
              <ChevronRight size={14} />
            </button>
          </Link>
        </div>

        <div className="hidden lg:block w-full h-px bg-khaki/40 mb-3" />

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl text-beige/80 hover:bg-khaki/60 hover:text-white transition duration-300 w-full"
        >
          <LogOut size={20} strokeWidth={1.8} />
          <span className="text-sm font-medium">Keluar</span>
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
