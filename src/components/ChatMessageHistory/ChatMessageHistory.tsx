import React from 'react';
import './ChatMessageHistory.css';

interface ChatMessageHistoryProps {
  messages: { userMessage: string; botResponse: string }[];
}

const ChatMessageHistory: React.FC<ChatMessageHistoryProps> = ({ messages }) => {
  return (
    <div className="chat-message-history">
      {messages.map((message, index) => (
        <div key={index} className="chat-message">
          <div className="user-message"><strong>You:</strong> {message.userMessage}</div>
          <div className="bot-response"><strong>Bot:</strong> {message.botResponse}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessageHistory;
