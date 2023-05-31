import React, { useState } from 'react';
import './MainContent.css';

const MainContent = () => {
  const [codePreviewOpen, setCodePreviewOpen] = useState([false, false, false]); // State for code preview

  // Function to handle code preview button click
  const handleCodePreviewClick = (index) => {
    let newCodePreviewOpen = [...codePreviewOpen];
    newCodePreviewOpen[index] = !newCodePreviewOpen[index];
    setCodePreviewOpen(newCodePreviewOpen);
  }

  return (
    <div className="main-content">
      {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
        <div key={index} className="project">
          <img src="https://via.placeholder.com/150" alt={project} />
          <button className="code-preview-button" onClick={() => handleCodePreviewClick(index)}>
            {codePreviewOpen[index] ? 'Close Code' : 'Open Code'}
          </button>
          {/* Conditional rendering of code preview */}
          {codePreviewOpen[index] && <div>Code Preview...</div>}
        </div>
      ))}
    </div>
  );
}

export default MainContent;
