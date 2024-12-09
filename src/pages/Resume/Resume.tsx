import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { getResumeInferenceWithSources } from '../../api/resume/resume';
import './Resume.css'; 
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatMessageHistory from '../../components/ChatMessageHistory/ChatMessageHistory';
import PopupDiagram from '../../components/PopupDiagram/PopupDiagram';

const Resume: React.FC = () => {
  const [messages, setMessages] = useState<{ userMessage: string; botResponse: string, contextSources: string[] }[]>([]);
  const [isChatVisible, setIsChatVisible] = useState(false); // Initially hidden

  const handleSendMessage = async (message: string) => {
    if (!isChatVisible) {
      setIsChatVisible(true); // Show chatbox on first message
    }

    // Add a placeholder for the message being processed
    const updatedMessages = [...messages, { userMessage: message, botResponse: '...', contextSources: [] }];
    setMessages(updatedMessages);

    // Fetch bot response and context sources
    const { llm_response, context_sources } = await getResumeInferenceWithSources(message);

    // Update chat history with real data
    setMessages(prevMessages => [
      ...prevMessages.slice(0, -1), // Remove placeholder
      { userMessage: message, botResponse: llm_response, contextSources: context_sources }
    ]);
  };

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Function to toggle the popup state
  const handlePopupToggle = () => {
    setIsPopupVisible((prev) => !prev);
  };

  return (
    <div className="resume-container">
      <Link to="/" className="home-button" aria-label="Home">
        <FontAwesomeIcon icon={faHome} />
      </Link>

      <ChatMessageHistory
        messages={messages}
        isVisible={isChatVisible}
        toggleVisibility={() => setIsChatVisible(!isChatVisible)}
      />

      <iframe
        src={`${process.env.PUBLIC_URL}/resume.pdf#view=FitH`}
        width="850"
        height="1100"
        className="resume-iframe"
        title="Resume of Timothy Villaraza"
        seamless
      ></iframe>
      
      <ChatBox onSendMessage={handleSendMessage} handlePopupToggle={handlePopupToggle} />

      {isPopupVisible && <PopupDiagram handlePopupToggle={handlePopupToggle} />}
    </div>
  );
};

export default Resume;
