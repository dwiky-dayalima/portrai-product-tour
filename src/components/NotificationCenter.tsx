import { MessageCircle, Mail, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const NotificationCenter = () => {
  return (
    <aside className="w-[320px] bg-card border-l border-border p-6">
      <h2 className="text-xl font-bold mb-6">Notification Center</h2>

      <div className="space-y-4">
        {/* Conversations */}
        <div className="rounded-2xl border-2 border-[hsl(var(--notification-conversations))]/20 bg-[hsl(var(--notification-conversations))]/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--notification-conversations))] flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Conversations</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs border-[hsl(var(--notification-conversations))]/30 hover:bg-[hsl(var(--notification-conversations))]/10"
            >
              View conversation
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center py-4">
            there is no new chats
          </p>
        </div>

        {/* Emails */}
        <div className="rounded-2xl border-2 border-[hsl(var(--notification-emails))]/20 bg-[hsl(var(--notification-emails))]/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--notification-emails))] flex items-center justify-center">
                <Mail className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Emails</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs border-[hsl(var(--notification-emails))]/30 hover:bg-[hsl(var(--notification-emails))]/10"
            >
              View mails
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center py-4">
            there is no new emails
          </p>
        </div>

        {/* Coming up Meeting */}
        <div className="rounded-2xl border-2 border-[hsl(var(--notification-meetings))]/20 bg-[hsl(var(--notification-meetings))]/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--notification-meetings))] flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-sm">Coming up Meeting</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="h-7 text-xs border-[hsl(var(--notification-meetings))]/30 hover:bg-[hsl(var(--notification-meetings))]/10"
            >
              View calendar
            </Button>
          </div>
          <p className="text-sm text-muted-foreground text-center py-4">
            there is no coming meeting
          </p>
        </div>
      </div>
    </aside>
  );
};

export default NotificationCenter;