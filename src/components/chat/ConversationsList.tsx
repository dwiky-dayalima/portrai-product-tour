import { Hash } from "lucide-react";
import { Conversation } from "@/pages/Chat";

type ConversationsListProps = {
  onConversationClick: (conversation: Conversation) => void;
};

const conversations: Conversation[] = [
  { id: "1", name: "<simulation-SWOT>", unreadCount: 99 },
  { id: "2", name: "<simulation-Integrating program>" },
  { id: "3", name: "<simulation-Platform integration>", unreadCount: 99 },
  { id: "4", name: "<simulation-Forecasting market>", unreadCount: 21 },
];

const ConversationsList = ({ onConversationClick }: ConversationsListProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Conversations</h1>
      
      <div className="space-y-4">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => onConversationClick(conversation)}
            className="w-full flex items-center justify-between p-6 bg-card hover:bg-muted/50 rounded-2xl border border-border transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-[hsl(var(--primary))]/10 transition-colors">
                <Hash className="w-6 h-6 text-muted-foreground group-hover:text-[hsl(var(--primary))]" />
              </div>
              <span className="text-lg font-medium text-foreground">{conversation.name}</span>
            </div>
            
            {conversation.unreadCount && (
              <div className="min-w-[44px] h-[28px] rounded-full bg-[hsl(var(--status-proctoring))] flex items-center justify-center px-3">
                <span className="text-sm font-bold text-white">
                  {conversation.unreadCount > 99 ? "99" : conversation.unreadCount}
                </span>
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-center text-center py-12">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--avatar-purple))]/20 flex items-center justify-center mb-6">
          <div className="text-6xl">💬</div>
        </div>
        <p className="text-lg font-medium text-foreground mb-2">Click conversation to select contact</p>
        <p className="text-muted-foreground">Nothing is selected</p>
      </div>
    </div>
  );
};

export default ConversationsList;