import React, { useEffect, useRef } from 'react';
import { notesToABC } from '../utils/notes';
const abcJS = (typeof window !== 'undefined') 
  ? require('abcjs') 
  : {};

const MusicNotation = ({ notes, width=500, height=100, padNotes=10, highlightNotes=[] }) => {

  const notationEl = useRef();

  const abcNotes = notesToABC(notes);
  while(abcNotes.length < padNotes) {
    abcNotes.push('x');
  }
  const notation = `[L:1] ${abcNotes.join(' ')}|`;

  useEffect(() => {
    const renderParams =  {
      add_classes: true,
      staffwidth: width - 50,
      responsive: 'resize',
      paddingbottom: 0,
      paddingtop: 0,
      paddingleft: 0,
      paddingright: 0,
      clickListener: onClick
    };
    abcJS.renderAbc(notationEl.current, notation, renderParams);
  }, [ notation, width ]);

  const onClick = (abcelem, tuneNumber, classes, analysis, drag) => {
  };
  
  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`
  };

  return (<div style={containerStyle} className="music-notation">
      <style>{highlightNotes.map(note => `svg > .abcjs-n${notes.indexOf(note)} { fill: #ff00ff !important; }`).join("\n")}</style>
      <div ref={notationEl}></div>
    </div>);
};

export default MusicNotation;