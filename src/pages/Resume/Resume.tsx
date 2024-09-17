import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { getResumeInference } from '../../api/resume/resume';
import './Resume.css'; 
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatMessageHistory from '../../components/ChatMessageHistory/ChatMessageHistory';

const Resume: React.FC = () => {
  const [messages, setMessages] = useState<{ userMessage: string; botResponse: string }[]>([]);
  const [isChatVisible, setIsChatVisible] = useState(false); // Initially hidden

  const handleSendMessage = async (message: string) => {
    if (!isChatVisible) {
      setIsChatVisible(true); // Slide in chat when first message is sent
    }

    // Add the user message with a placeholder for bot response
    const updatedMessages = [
      ...messages,
      { userMessage: message, botResponse: '...' } // Placeholder while fetching the response
    ];
    setMessages(updatedMessages);

    // Fetch the bot's response
    const botResponse = await getResumeInference(message);

    // Update the chat history with the actual bot response
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1), // Remove the placeholder message
      { userMessage: message, botResponse }  // Add the actual response
    ]);
  };

  return (
    <div className="resume-container">
      {/* Home button replaced with a home icon */}
      <Link to="/" className="home-button" aria-label="Home">
        <FontAwesomeIcon icon={faHome} />
      </Link>

      <ChatMessageHistory
        messages={messages}
        isVisible={isChatVisible}
        toggleVisibility={() => setIsChatVisible(!isChatVisible)}
      />

      <iframe
        src="https://resume.creddle.io/embed/6x3f8thxdss"
        width="850"
        height="1100"
        className="resume-iframe"
        title="Resume of Timothy Villaraza"
        seamless
      ></iframe>
      
      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Resume;
