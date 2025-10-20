import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import ExecutiveMessage from "@/components/ExecutiveMessage";
import NotificationCenter from "@/components/NotificationCenter";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Section */}
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto p-8">
              {/* Welcome Section */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Hi {"{User_Name}"}</p>
                  <h1 className="text-3xl font-bold text-foreground">
                    Welcome, AVP of Earth Operation
                  </h1>
                </div>
                <Button 
                  className="bg-[hsl(var(--sidebar-dark))] hover:bg-[hsl(var(--sidebar-dark))]/90 text-white px-6"
                >
                  Tonton Video
                </Button>
              </div>

              {/* Executive Message Card */}
              <ExecutiveMessage />
            </div>
          </main>

          {/* Notification Center */}
          <NotificationCenter />
        </div>
      </div>
    </div>
  );
};

export default Index;