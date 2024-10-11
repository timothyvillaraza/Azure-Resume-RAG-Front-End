import React from 'react';
import './PopupDiagram.css';

interface PopupDiagramProps {
  handlePopupToggle: () => void; // Function to close the popup
}

const PopupDiagram: React.FC<PopupDiagramProps> = ({ handlePopupToggle }) => {
  return (
    <div className="popup-backdrop" onClick={handlePopupToggle}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handlePopupToggle}>
          &times;
        </button>
        <h2>Architecture Diagram</h2>
        <img src="/ArchitectureDiagram.svg" alt="Architecture Diagram" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default PopupDiagram;
