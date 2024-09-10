import React, { useState } from 'react';
import './ChatBox.css';

interface ChatBoxProps {
  onSendMessage: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue(''); // Clear the input after sending the message
    }
  };

  return (
    <div className="chatbox-container">
      <input
        type="text"
        className="chatbox-input"
        placeholder="Ask a question about this resume..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
      />
      <button className="chatbox-send-button" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default ChatBox;
