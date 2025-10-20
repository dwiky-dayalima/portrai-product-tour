import { ChevronLeft, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Conversation, Contact } from "@/pages/Chat";

type ContactsListProps = {
  conversation: Conversation;
  onContactClick: (contact: Contact) => void;
  onBack: () => void;
  onAddNewChat: () => void;
  selectedContact: Contact | null;
};

const contacts: Contact[] = [
  {
    id: "1",
    name: "Aubrey Hilpert",
    role: "Marketing Manager",
    message: "Consectetur adipiscing elit",
    timestamp: "11:15 AM",
    avatar: "AZ",
    isOnline: false,
  },
  {
    id: "2",
    name: "<Group Name>",
    role: "",
    message: "Sed do eiusmod tempor incididunt",
    timestamp: "12:00 PM",
    avatar: "GR",
    isGroup: true,
    hasUnread: true,
  },
  {
    id: "3",
    name: "Anne Abshire",
    role: "Product Designer",
    message: "Ut enim ad minim veniam",
    timestamp: "1:30 PM",
    avatar: "PD",
    isOnline: true,
  },
  {
    id: "4",
    name: "Damon Stehr",
    role: "Data Analyst",
    message: "Quis nostrud exercitation ullamco",
    timestamp: "2:45 PM",
    avatar: "AZ",
    isOnline: false,
  },
];

const ContactsList = ({ conversation, onContactClick, onBack, onAddNewChat, selectedContact }: ContactsListProps) => {
  return (
    <div className="w-[600px] border-r border-border p-8 overflow-y-auto flex-shrink-0">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-3xl font-bold">Chat</h1>
        </div>
        <Button
          onClick={onAddNewChat}
          className="bg-[hsl(var(--sidebar-dark))] hover:bg-[hsl(var(--sidebar-dark))]/90 text-white"
        >
          Add New Chat
        </Button>
      </div>

      <div className="mb-6 px-6 py-4 bg-[hsl(var(--sidebar-dark))] rounded-2xl flex items-center gap-3">
        <Hash className="w-5 h-5 text-white" />
        <span className="text-white font-medium">{conversation.name}</span>
      </div>

      <div className="space-y-2">
        {contacts.map((contact) => {
          const isSelected = selectedContact?.id === contact.id;
          return (
            <button
              key={contact.id}
              onClick={() => onContactClick(contact)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all group ${
                isSelected 
                  ? "bg-[hsl(var(--primary))]/10 border-l-4 border-[hsl(var(--primary))]" 
                  : "hover:bg-muted/50"
              }`}
            >
            <div className="relative">
              {contact.isGroup ? (
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Users className="w-6 h-6 text-muted-foreground" />
                </div>
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-sm font-bold">
                  {contact.avatar}
                </div>
              )}
              {contact.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[hsl(var(--status-strong))] border-2 border-background"></div>
              )}
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-foreground">{contact.name}</h3>
                <span className="text-xs text-muted-foreground">{contact.timestamp}</span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {contact.role && `${contact.role} - `}
                {contact.message}
              </p>
            </div>

            {contact.hasUnread && (
              <div className="w-2 h-2 rounded-full bg-[hsl(var(--status-proctoring))]"></div>
            )}
          </button>
        );
        })}
      </div>

      {!selectedContact && (
        <div className="mt-16 flex flex-col items-center justify-center text-center py-12">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--avatar-purple))]/20 flex items-center justify-center mb-6">
            <div className="text-6xl">💬</div>
          </div>
          <p className="text-lg font-medium text-foreground mb-2">Click contact person to chat</p>
          <p className="text-muted-foreground">Nothing is selected</p>
        </div>
      )}
    </div>
  );
};

const Hash = ({ className }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="9" x2="20" y2="9"></line>
    <line x1="4" y1="15" x2="20" y2="15"></line>
    <line x1="10" y1="3" x2="8" y2="21"></line>
    <line x1="16" y1="3" x2="14" y2="21"></line>
  </svg>
);

export default ContactsList;