import React, { useState } from 'react'; 
import Piano from 'components/Piano';
import StudyNotes from 'components/StudyNotes';
import { useSynth } from 'utils/synth';
import { applyTonePattern } from 'utils/notes';
import { Notes, MajorScalePattern } from 'appConstants';
import MusicNotation from 'components/MusicNotation';
import cx from 'classnames';

const Octave = 4;

const MajorScales = () => {
  const [ highlightKeys, setHighlightKeys ] = useState([]);
  const [ playingNotes, setPlayingNotes ] = useState([]);
  const { playNotes, notesPlaying } = useSynth();
  const activeNotes = playingNotes.filter(note => notesPlaying[note]);

  const handleHover = (note) => {
    if (note) {
      const notes = applyTonePattern(`${note}${Octave}`, MajorScalePattern);
      setHighlightKeys(notes);
    } else {
      setHighlightKeys([]);
    }
  }

  const handleClick = (note) => {
    const notes = applyTonePattern(`${note}${Octave}`, MajorScalePattern);
    setPlayingNotes(notes);
    playNotes(notes);
  }

  return (<div>
    <div className="box controls">
      {Notes.map(note => (
        <button 
          className={cx('button', 'is-primary')} 
          key={note} 
          onMouseOver={() => handleHover(note)}
          onMouseOut={() => handleHover()}
          onClick={() => handleClick(note)}>{note}</button>
      ))}
    </div>
    <MusicNotation notes={highlightKeys.length > 0 ? highlightKeys : playingNotes} padNotes={7} highlightNotes={activeNotes} />
    <Piano startNote="C4" endNote="B5" highlightNotes={highlightKeys} />
    <StudyNotes>{`
Major Scales have the pattern TTSTTTS.
Where T = Tone (full step) and S = Semiton (half step)
  `}</StudyNotes>
  </div>);

};


export default MajorScales;