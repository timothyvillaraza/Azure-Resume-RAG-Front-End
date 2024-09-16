import React, { useState } from 'react';
import { getResumeInference } from '../../api/resume/resume';
import './Resume.css'; 
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatMessageHistory from '../../components/ChatMessageHistory/ChatMessageHistory';


const Resume: React.FC = () => {
  const [messages, setMessages] = useState<{ userMessage: string; botResponse: string }[]>([]);

  const handleSendMessage = async (message: string) => {
    // Add the user message with a placeholder for bot response
    setMessages([
      ...messages,
      { userMessage: message, botResponse: '...' }  // Placeholder while fetching the response
    ]);

    // Call the updated getResumeInference function to get the real response or an error message
    const botResponse = await getResumeInference(message);

    // Update the chat history with the actual bot response or error
    setMessages((prevMessages) => [
      ...prevMessages.slice(0, -1), // Remove the placeholder
      { userMessage: message, botResponse }  // Set the actual response
    ]);
  };

  return (
    <div className="resume-container">
      <ChatMessageHistory messages={messages} />
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