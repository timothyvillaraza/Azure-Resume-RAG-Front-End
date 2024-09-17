import React, { useEffect, useRef } from 'react';
import './ChatMessageHistory.css';

interface ChatMessageHistoryProps {
  messages: { userMessage: string; botResponse: string }[];
  isVisible: boolean; // Control visibility
  toggleVisibility: () => void; // Toggle visibility
}

const ChatMessageHistory: React.FC<ChatMessageHistoryProps> = ({ messages, isVisible, toggleVisibility }) => {
  const chatBoxRef = useRef<HTMLDivElement>(null); // Reference to the chat message history box

  // Scroll to the bottom of the chatbox whenever new messages are added
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]); // Run this effect every time messages change

  return (
    <div>
      <div
        ref={chatBoxRef} // Attach the ref to the chat message history container
        className={`chat-message-history ${isVisible ? 'visible' : 'hidden'}`}
      >
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <div className="user-message"><strong>You:</strong> {message.userMessage}</div>
            <div className="bot-response"><strong>Bot:</strong> {message.botResponse}</div>
          </div>
        ))}
      </div>

      {/* Triangle as the clickable element */}
      <div
        className={`toggle-triangle ${isVisible ? 'open' : 'close'}`}
        onClick={toggleVisibility}
      />
    </div>
  );
};

export default ChatMessageHistory;
