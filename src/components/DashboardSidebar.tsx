import { Home, MessageCircle, Mail, Briefcase, Phone, Info, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-[72px] bg-[hsl(var(--sidebar-dark))] flex flex-col items-center py-5 gap-6">
      {/* Logo */}
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center mb-2">
        <div className="w-8 h-8 rounded-full border-2 border-white/50">
          <div className="w-full h-full rounded-full border-2 border-white/30 flex items-center justify-center">
            <span className="text-white text-xs font-bold">C</span>
          </div>
        </div>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col items-center gap-8 flex-1">
        <button 
          onClick={() => navigate("/")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${
            isActive("/") ? "bg-[hsl(var(--primary))]" : "hover:bg-white/5"
          }`}
        >
          <Home className={`w-5 h-5 ${isActive("/") ? "text-white" : "text-[hsl(var(--sidebar-icon))]"}`} />
        </button>
        <button 
          onClick={() => navigate("/chat")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110 ${
            isActive("/chat") ? "bg-[hsl(var(--primary))]" : "hover:bg-white/5"
          }`}
        >
          <MessageCircle className={`w-5 h-5 ${isActive("/chat") ? "text-white" : "text-[hsl(var(--sidebar-icon))]"}`} />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-white/5">
          <Mail className="w-5 h-5 text-[hsl(var(--sidebar-icon))]" />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-white/5">
          <Briefcase className="w-5 h-5 text-[hsl(var(--sidebar-icon))]" />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-white/5">
          <Phone className="w-5 h-5 text-[hsl(var(--sidebar-icon))]" />
        </button>
      </nav>

      {/* Bottom Icons */}
      <div className="flex flex-col items-center gap-4">
        <button className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-white/5">
          <Info className="w-5 h-5 text-[hsl(var(--sidebar-icon))]" />
        </button>
        <button className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:bg-white/5">
          <Settings className="w-5 h-5 text-[hsl(var(--sidebar-icon))]" />
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;