import React, { useState, useEffect } from 'react'; 
import Piano from 'components/Piano';
import StudyNotes from 'components/StudyNotes';
import { Notes, MajorScalePattern } from 'appConstants';
import { applyTonePattern, chordName, getDegreesInScale } from 'utils/notes';
import { useSynth } from 'utils/synth';
import cx from 'classnames';

// Root, Third, Fifth
// C Major = C D E F G A B C
// A Major =  A B C# D E F# G# A
// Major Chord = 4,3 semitones
// Minor Chord = 3,4 semitones
// Dim Chord = 3,3 semitones
// maj min min maj maj min dim
// I   ii  iii IV  V   vi  vii^o

const IntroChords = () => {
  const [ key, setKey ] = useState('C');
  const [ scaleNotes, setScaleNotes ] = useState([]);
  const [ chords, setChords ] = useState([])
  const [ highlightNotes, setHighlightNotes ] = useState([]);
  const { playNote } = useSynth(); 

  useEffect(() => {
    const scaleNotes = applyTonePattern(`${key}4`, MajorScalePattern).slice(0,7); 
    setScaleNotes(scaleNotes);
    const chords = scaleNotes.map((note, number) => {
      const chord = getDegreesInScale([1 + number, 3 + number, 5 + number], scaleNotes);
      const name = chordName(chord);
      return {
        name: name,
        notes: chord,
        className: cx({ 'is-major': name.match(/maj$/) }, { 'is-minor' : name.match(/min$/) }, { 'is-diminished': name.match(/dim$/) })
      };
    });
    setChords(chords);
  }, [ key ]);


  const handleChord = (chord) => {
    playNote(chord.notes);
  }

  const handleHover = (chord) => {
    setHighlightNotes(chord ? chord.notes: []);
  }

  const renderInsideKey = (note) => {
    const number = scaleNotes.indexOf(note);
    if (number !== -1) {
      return (<div className="noteNumber">{number + 1}</div>);
    }
  };

  const startNote = scaleNotes[0];

  return (<div>
    <div className="box controls">
      <div>
        <label className="label">Major Scale</label>
        <div className="select">
          <select onChange={(e) => setKey(e.target.value)} value={key}>
            {Notes.map(note => (
              <option value={note} key={note}>{note}</option>
            ))}
          </select>
        </div>
      </div>
      {chords.map(chord => (
        <button 
          className={cx('button', chord.className)} 
          key={chord.name} 
          onMouseOver={() => handleHover(chord)}
          onMouseOut={() => handleHover()}
          onClick={() => handleChord(chord)}>{chord.name}</button>
      ))}
    </div>
    <Piano startNote="C4" endNote="E6" highlightNotes={highlightNotes} renderAdditionalKeyLabel={renderInsideKey} />
    <StudyNotes>{`
- Triads are the simples types of chords
- These are all the triads that can be derived from ${key} major scale
- **Major triads** have a perfect fifth and a major third (4,3 semitones)
- **Minor triads** have a perfecct fifth and a minor third (3,5 semitones)
- **Diminished triads** have a diminished fifth and a minor third (3,3 semitones)
  `}</StudyNotes>
  </div>);

};


export default IntroChords;