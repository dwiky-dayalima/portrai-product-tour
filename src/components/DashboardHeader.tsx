import { ChevronDown, Sparkles } from "lucide-react";

const DashboardHeader = () => {
  return (
    <header className="h-[72px] px-8 flex items-center justify-between border-b border-border bg-card">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] bg-clip-text text-transparent">
          PortrAI
        </h1>
      </div>

      {/* Status Indicators */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 bg-[hsl(var(--sidebar-dark))] rounded-full px-6 py-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--status-proctoring))] animate-pulse"></div>
            <span className="text-sm font-medium text-white">Proctoring</span>
          </div>
          <div className="w-px h-4 bg-white/20"></div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-[hsl(var(--status-strong))] rounded-full"></div>
              <div className="w-1 h-4 bg-[hsl(var(--status-strong))] rounded-full"></div>
              <div className="w-1 h-5 bg-[hsl(var(--status-strong))] rounded-full"></div>
            </div>
            <span className="text-sm font-medium text-[hsl(var(--status-strong))]">Strong</span>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Assessment berakhir dalam</p>
          <p className="text-lg font-bold">14 : 59</p>
        </div>
        <button className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors">
          <Sparkles className="w-5 h-5 text-[hsl(var(--primary))]" />
        </button>
        <ChevronDown className="w-5 h-5 text-muted-foreground" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-sm font-bold">
            AZ
          </div>
          <span className="text-sm font-medium">Hi, Harold Jacobson</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;