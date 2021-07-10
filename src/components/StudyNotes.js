import React from 'react';
import ReactMarkdown from 'react-markdown'
import './StudyNotes.scss';

const StudyNotes = ({ children }) => {
  return (<div className="study-notes">
    <h2 className="subtitle">Study Notes</h2>
    <ReactMarkdown>{children}</ReactMarkdown>
  </div>);
};

export default StudyNotes;