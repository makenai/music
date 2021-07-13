import { Notation } from 'react-abc';
import { notesToABC } from '../utils/notes';

const MusicNotation = ({ notes, width=500, height=100, padNotes=10, highlightNotes=[] }) => {

  const onClick = (abcelem, tuneNumber, classes, analysis, drag) => {
  };

  const abcNotes = notesToABC(notes);
  while(abcNotes.length < padNotes) {
    abcNotes.push('x');
  }

  const dynamicCSS = highlightNotes.map(note => {
    const noteNumber = notes.indexOf(note);
    return `svg > .abcjs-n${noteNumber} { fill: #ff00ff !important; }`;
  }).join("\n");

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
  
  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`
  };

  return (<div style={containerStyle} className="music-notation">
      <style type="text/css">{dynamicCSS}</style>
      <Notation 
        renderParams={renderParams}
        notation={`[L:1] ${abcNotes.join(' ')}|`} />
    </div>);
};

export default MusicNotation;