import React from 'react';
import ReactMarkdown from 'react-markdown'

const StudyNotes = ({ children }) => {
  return (<div className="study-notes content">
    <ReactMarkdown>{children}</ReactMarkdown>
  </div>);
};

export default StudyNotes;