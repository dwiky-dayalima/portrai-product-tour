import { useState } from "react";
import { X, Search, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Contact } from "@/pages/Chat";

type ContactsPanelProps = {
  onClose: () => void;
  onSelectContact: (contact: Contact) => void;
};

type GroupedContact = {
  name: string;
  position: string;
  division: string;
  email: string;
  avatar: string;
};

type ContactGroup = {
  title: string;
  contacts: GroupedContact[];
};

const contactGroups: ContactGroup[] = [
  {
    title: "President Director",
    contacts: [
      {
        name: "Emily Carter",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Emily.Carter@yahoo.com",
        avatar: "AZ",
      },
      {
        name: "Sarah Patel",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Sarah.Patel@gmail.com",
        avatar: "AZ",
      },
      {
        name: "Marcus Lee",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Marcus.Lee@outlook.com",
        avatar: "AZ",
      },
      {
        name: "Tommy Nguyen",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Tommy.Nguyen@email.com",
        avatar: "AZ",
      },
    ],
  },
  {
    title: "Director",
    contacts: [
      {
        name: "Emily Carter",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Emily.Carter@yahoo.com",
        avatar: "AZ",
      },
      {
        name: "Sarah Patel",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Sarah.Patel@gmail.com",
        avatar: "AZ",
      },
    ],
  },
  {
    title: "Vice President",
    contacts: [
      {
        name: "Emily Carter",
        position: "<contact_position>",
        division: "<contact_division>",
        email: "Emily.Carter@yahoo.com",
        avatar: "AZ",
      },
    ],
  },
];

const ContactsPanel = ({ onClose, onSelectContact }: ContactsPanelProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <aside className="w-[420px] bg-card border-l border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl hover:bg-muted flex items-center justify-center transition-colors ml-auto"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <Button
          className="w-full bg-muted hover:bg-muted/80 text-foreground justify-start h-12 mb-4"
        >
          Add to chat
        </Button>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Contact"
            className="pl-10 h-11 bg-muted/50 border-0"
          />
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Contacts</h2>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <span className="text-sm font-medium">{selectedFilter}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="space-y-6">
          {contactGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="text-sm font-bold text-foreground mb-3">{group.title}</h3>
              <div className="space-y-2">
                {group.contacts.map((contact, contactIndex) => (
                  <button
                    key={contactIndex}
                    onClick={() => {
                      onSelectContact({
                        id: `${groupIndex}-${contactIndex}`,
                        name: contact.name,
                        role: contact.position,
                        message: "",
                        timestamp: "",
                        avatar: contact.avatar,
                      });
                    }}
                    className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--avatar-purple))] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      {contact.avatar}
                    </div>
                    
                    <div className="flex-1 text-left min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-sm text-foreground truncate">
                          {contact.position} . {contact.name}
                        </h4>
                        <div className="w-5 h-5 rounded-full border-2 border-border group-hover:border-[hsl(var(--primary))] flex-shrink-0 transition-colors"></div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1 truncate">
                        {contact.division}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Mail className="w-3 h-3" />
                        <span className="truncate">{contact.email}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ContactsPanel;