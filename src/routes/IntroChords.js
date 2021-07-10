import { useState } from 'react'; 
import Piano from '../components/Piano';
import StudyNotes from '../components/StudyNotes';
import { useSynth } from '../utils/synth';
import cx from 'classnames';

const cMajorChords = [
  { name: 'Cmaj', notes: [ 'C4', 'E4', 'G4' ], className: 'is-major' },
  { name: 'Dmin', notes: [ 'D4', 'F4', 'A4' ], className: 'is-minor' },
  { name: 'Emin', notes: [ 'E4', 'G4', 'B4' ], className: 'is-minor' },
  { name: 'Fmaj', notes: [ 'F4', 'A4', 'C5' ], className: 'is-major' },
  { name: 'Gmaj', notes: [ 'G4', 'B4', 'D5' ], className: 'is-major' },
  { name: 'Amin', notes: [ 'A4', 'C5', 'E5' ], className: 'is-minor' },
  { name: 'Bdim', notes: [ 'B4', 'D5', 'F5' ], className: 'is-diminished' }
];

const IntroChords = () => {
  const [ highlightNotes, setHighlightNotes ] = useState([]);
  const { playNote } = useSynth(); 

  const handleChord = (chord) => {
    playNote(chord.notes);
  }

  const handleHover = (chord) => {
    setHighlightNotes(chord ? chord.notes: []);
  }

  return (<div>
    <div className="box controls">
      {cMajorChords.map(chord => (
        <button 
          className={cx('button', chord.className)} 
          key={chord.name} 
          onMouseOver={() => handleHover(chord)}
          onMouseOut={() => handleHover()}
          onClick={() => handleChord(chord)}>{chord.name}</button>
      ))}
    </div>
    <Piano startNote="C4" endNote="F5" highlightNotes={highlightNotes} />
    <StudyNotes>{`
- Triads are the simples types of chords
- These are all the triads that can be derived from C-major scale
- **Major triads** have a perfect fifth and a major third
- **Minor triads** have a perfecct fifth and a minor third
- **Diminished triads** have a diminished fifth and a minor third
- **Perfect Fifth**: 7 semitones between notes (C and G)
- **Diminished Fifth**: 6 semitones between notes (B and F)
- **Major Third**: 4 semitones between notes (C and E)
- **Minor Third**: 3 semitones between notes (D and F)
  `}</StudyNotes>
  </div>);

};


export default IntroChords;