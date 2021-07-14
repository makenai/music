import React, { useState, useEffect } from 'react';
import { useSynth } from 'utils/synth';
import { getInterval, noteCmp } from 'utils/notes';
import Piano from 'components/Piano';
import StudyNotes from 'components/StudyNotes';
import MusicNotation from 'components/MusicNotation';
import { compact } from 'lodash';
import style from 'styles/lessons/intervals.module.scss';

const IntervalsRoute = () => {
  const { playNote } = useSynth();
  const [ note1, setNote1 ] = useState();
  const [ note2, setNote2 ] = useState();
  const [ interval, setInterval ] = useState();

  const handlePlay = (note) => {
    if (note2 || !note1) {
      setNote1(note);
      setNote2(null);
    } else {
      switch(noteCmp(note1, note)) {
        case 0: // Same note, cancel
          setNote1(null);
          break;
        case 1: // Right side is higher, proceed
          setNote2(note);
          break;
        case -1: // Left side is higher, swap notes
          setNote1(note);
          setNote2(note1);
          break;
        default:
      }
    }
    playNote(note);
  };

  useEffect(() => {
    setInterval((note1 && note2) ? getInterval(note1, note2) : null);
  }, [ note1, note2 ]);

  const renderInsideKey = (note) => {
    if (note === note1) {
      return (<div className="firstNote">1</div>);
    }
    if (note === note2) {
      return (<div className="secondNote">2</div>);
    }
  };

  return (<>
    <div className="box controls">
      <div className={style['intervals-display']}>
        <MusicNotation notes={compact([note1,note2])} width={200} padNotes={2} />
        {note1 && <div className="firstNote">
            {note1}
        </div>}
        {(note1 && note2) && <div>to</div>}
        {note2 && <div className="secondNote">
            {note2}
        </div>}
        {interval && <>
          <div>=</div>
          <div>
            {interval.semitones} semitones{interval.name && `, ${interval.name}`}
          </div></>}
      </div>
    </div>
    <Piano startNote="C4" endNote="C6" onPlay={handlePlay} renderAdditionalKeyLabel={renderInsideKey} noDrag />
    <StudyNotes>{`
- **Perfect Fifth**: 7 semitones between notes (C and G)
- **Diminished Fifth**: 6 semitones between notes (B and F)
- **Perfect Fourth**: 5 semitones beween notes (C and F)
- **Major Third**: 4 semitones between notes (C and E)
- **Minor Third**: 3 semitones between notes (D and F)
- **Major Second**: 2 semitones between notes (C and D)
- **Minor Second**: 1 semitone between notes (C and C#)
  `}</StudyNotes>
  </>);

};


export default IntervalsRoute;