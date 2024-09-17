import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { getResumeInferenceWithSources } from '../../api/resume/resume';
import './Resume.css'; 
import ChatBox from '../../components/ChatBox/ChatBox';
import ChatMessageHistory from '../../components/ChatMessageHistory/ChatMessageHistory';

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

    // Highlight the resume using context_sources
    highlightResume(context_sources);
  };

  // Function to highlight text in the iframe (non-recursive)
  const highlightResume = (contextSources: string[]) => {
    const iframe = document.querySelector('iframe');
    if (!iframe || !iframe.contentDocument) return;  // Ensure iframe and its document is loaded

    const doc = iframe.contentDocument;
    const elements = Array.from(doc.body.getElementsByTagName('*'));  // Get all elements in the body

    contextSources.forEach(source => {
      elements.forEach(element => {
        // Check if the element has text content and contains the source
        if (element.textContent?.includes(source)) {
          element.innerHTML = element.innerHTML.replace(
            source,
            `<mark>${source}</mark>`  // Wrap the matched source with <mark> tag
          );
        }
      });
    });
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
