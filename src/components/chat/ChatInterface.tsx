import { useState } from "react";
import { ChevronLeft, Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Conversation, Contact } from "@/pages/Chat";

type ChatInterfaceProps = {
  conversation: Conversation;
  contact: Contact;
  onBack: () => void;
};

type Message = {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isMe: boolean;
  isRead?: boolean;
};

const messages: Message[] = [
  {
    id: "1",
    sender: "~John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus aliquet rutrum. Integer quis facilisis ex.",
    timestamp: "10:45 AM",
    isMe: false,
  },
  {
    id: "2",
    sender: "~John Doe",
    content: "Lorem ipsum dolor sit amet.",
    timestamp: "10:45 AM",
    isMe: false,
  },
  {
    id: "3",
    sender: "~John Doe",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    timestamp: "10:45 AM",
    isMe: false,
  },
  {
    id: "4",
    sender: "Me",
    content: "Lorem ipsum dolor sit amet consectetur. A aliquam massa suscipit in etiam et facilisis feugiat. Id fringilla consequat eget rhoncus sit ligula. Ac volutpat tincidunt nulla aliquam massa cras.",
    timestamp: "10:45 AM",
    isMe: true,
    isRead: true,
  },
  {
    id: "5",
    sender: "~John Doe",
    content: "...Typing",
    timestamp: "10:45 AM",
    isMe: false,
  },
];

const ChatInterface = ({ conversation, contact, onBack }: ChatInterfaceProps) => {
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="w-full flex flex-col h-full">
      {/* Header */}
      <div className="px-8 py-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-3xl font-bold">Chat</h1>
          </div>
          <Button className="bg-[hsl(var(--sidebar-dark))] hover:bg-[hsl(var(--sidebar-dark))]/90 text-white">
            Add New Chat
          </Button>
        </div>

        <div className="px-6 py-4 bg-[hsl(var(--sidebar-dark))] rounded-2xl flex items-center gap-3">
          <Hash className="w-5 h-5 text-white" />
          <span className="text-white font-medium">{conversation.name}</span>
        </div>
      </div>

      {/* Contact Info */}
      <div className="px-8 py-4 border-b border-border flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-sm font-bold">
            {contact.avatar}
          </div>
          {contact.isOnline && (
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[hsl(var(--status-strong))] border-2 border-background"></div>
          )}
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{contact.name}</h3>
          <p className="text-sm text-muted-foreground">{contact.role}</p>
        </div>
        {contact.isOnline && (
          <div className="ml-2 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[hsl(var(--status-strong))]"></div>
            <span className="text-xs text-[hsl(var(--status-strong))] font-medium">Online</span>
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
        <div className="text-center">
          <div className="inline-block px-4 py-1 bg-muted rounded-full text-sm text-muted-foreground">
            Monday, 11 Jan
          </div>
        </div>

        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isMe ? "justify-end" : "justify-start"}`}
          >
            {!message.isMe && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                MM
              </div>
            )}
            
            <div className={`flex flex-col ${message.isMe ? "items-end" : "items-start"} max-w-2xl`}>
              {!message.isMe && (
                <span className="text-sm text-[hsl(var(--primary))] font-medium mb-1">{message.sender}</span>
              )}
              
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.isMe
                    ? "bg-[hsl(var(--sidebar-dark))] text-white"
                    : message.content === "...Typing"
                    ? "bg-muted text-muted-foreground italic"
                    : "bg-muted/50 text-foreground"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
              
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                {message.isMe && message.isRead && (
                  <Check className="w-3 h-3 text-[hsl(var(--status-strong))]" />
                )}
              </div>
            </div>

            {message.isMe && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                AZ
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="px-8 py-6 border-t border-border">
        <div className="flex items-center gap-3">
          <Input
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Tipe your message here..."
            className="flex-1 h-12 rounded-xl bg-muted/50 border-0"
          />
          <button className="w-12 h-12 rounded-xl bg-[hsl(var(--sidebar-dark))] hover:bg-[hsl(var(--sidebar-dark))]/90 flex items-center justify-center transition-colors">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
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

export default ChatInterface;