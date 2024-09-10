import React, { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getResumeInference } from '../../api/resume/resume';
import './Resume.css'; 
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatMessageHistory from '../../components/ChatMessageHistory/ChatMessageHistory';


const Resume: React.FC = () => {
  const [messages, setMessages] = useState<{ userMessage: string; botResponse: string }[]>([]);

  const handleSendMessage = (message: string) => {
    // Add the user message and a mock response to the chat history
    setMessages([
      ...messages,
      { userMessage: message, botResponse: 'This is a mock response.' }
    ]);
  };

  // const { data: inference, isLoading, isError } = useQuery({queryKey: ['resumeInference'], queryFn: getResumeInference});

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (isError) {
  //   return <div>Error fetching resume inference</div>;
  // }

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