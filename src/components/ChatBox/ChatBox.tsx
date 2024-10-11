import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './ChatBox.css';

interface ChatBoxProps {
  onSendMessage: (message: string) => void;
  handlePopupToggle: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onSendMessage, handlePopupToggle }) => {
  const [inputValue, setInputValue] = useState("What is Tim's experience with...?");

  const handleSendMessage = () => {
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
        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
      />
      <button className="chatbox-send-button" onClick={handleSendMessage}>
        Send
      </button>
      <button className="chatbox-popup-button" title="Show Architecture Diagram" onClick={handlePopupToggle}>
        <FontAwesomeIcon icon={faCode} />
      </button>
    </div>
  );
};

export default ChatBox;
