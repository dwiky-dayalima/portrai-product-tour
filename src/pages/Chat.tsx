import { useState } from "react";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import ConversationsList from "@/components/chat/ConversationsList";
import ContactsList from "@/components/chat/ContactsList";
import ChatInterface from "@/components/chat/ChatInterface";
import ContactsPanel from "@/components/chat/ContactsPanel";

export type Conversation = {
  id: string;
  name: string;
  unreadCount?: number;
};

export type Contact = {
  id: string;
  name: string;
  role: string;
  message: string;
  timestamp: string;
  avatar: string;
  isGroup?: boolean;
  isOnline?: boolean;
  hasUnread?: boolean;
};

const Chat = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isContactsPanelOpen, setIsContactsPanelOpen] = useState(false);

  const handleConversationClick = (conversation: Conversation) => {
    setSelectedConversation(conversation);
    setSelectedContact(null);
  };

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleBackToConversations = () => {
    setSelectedConversation(null);
    setSelectedContact(null);
  };

  const handleBackToContacts = () => {
    setSelectedContact(null);
  };

  const handleAddNewChat = () => {
    setIsContactsPanelOpen(true);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />
        
        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 flex overflow-hidden">
            {!selectedConversation ? (
              <ConversationsList onConversationClick={handleConversationClick} />
            ) : !selectedContact ? (
              <ContactsList
                conversation={selectedConversation}
                onContactClick={handleContactClick}
                onBack={handleBackToConversations}
                onAddNewChat={handleAddNewChat}
              />
            ) : (
              <ChatInterface
                conversation={selectedConversation}
                contact={selectedContact}
                onBack={handleBackToContacts}
              />
            )}
          </main>

          {isContactsPanelOpen && (
            <ContactsPanel
              onClose={() => setIsContactsPanelOpen(false)}
              onSelectContact={(contact) => {
                setSelectedContact(contact);
                setIsContactsPanelOpen(false);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;