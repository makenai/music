import React, { useState, useEffect } from 'react'; 
import Piano from 'components/Piano';
import StudyNotes from 'components/StudyNotes';
import { Notes, MajorScalePattern, MinorScalePattern } from 'appConstants';
import { applyTonePattern, chordName, getDegreesInScale } from 'utils/notes';
import { useSynth } from 'utils/synth';
import { faDice, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sample } from 'lodash';
import cx from 'classnames';

const IntroChords = () => {
  const [ key, setKey ] = useState('C');
  const [ scale, setScale ] = useState('Major');
  const [ scaleNotes, setScaleNotes ] = useState([]);
  const [ progression, setProgression ] = useState([]);
  const [ chords, setChords ] = useState([])
  const [ highlightNotes, setHighlightNotes ] = useState([]);
  const { playNote, playNotes } = useSynth(); 

  useEffect(() => {
    const pattern = scale === 'Major' ? MajorScalePattern : MinorScalePattern;
    const scaleNotes = applyTonePattern(`${key}4`, pattern).slice(0,7); 
    setScaleNotes(scaleNotes);
    const chords = scaleNotes.map((note, number) => {
      const chord = getDegreesInScale([1 + number, 3 + number, 5 + number], scaleNotes);
      const name = chordName(chord);
      return {
        name: name,
        notes: chord,
        number,
        className: cx({ 'is-major': name.match(/maj$/) }, { 'is-minor' : name.match(/min$/) }, { 'is-diminished': name.match(/dim$/) })
      };
    });
    setChords(chords);
  }, [ key, scale ]);


  const handleChord = (chord) => {
    playNote(chord.notes);
  }

  const playProgression = () => {
    playNotes(progression.map(chord => chord.notes));
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

  const handleRandomize = () => {
    const newProgression = [];
    for (let i=0;i<4;i++) {
      newProgression.push(sample(chords));
    }
    playNotes(newProgression.map(chord => chord.notes));
    setProgression(newProgression);
  }

  return (<div>
    <div className="box controls">
      <div>
        <label className="label">Key</label>
        <div className="select">
          <select onChange={(e) => setKey(e.target.value)} value={key}>
            {Notes.map(note => (
              <option value={note} key={note}>{note}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="label">Scale</label>
        <div className="select">
          <select onChange={(e) => setScale(e.target.value)} value={scale}>
            <option value="Major">Major</option>
            <option value="Minor">Minor</option>
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
    <div className="box controls">
      {progression.map((chord,number) => (
        <button 
          className={cx('button', chord.className)} 
          key={number} 
          onMouseOver={() => handleHover(chord)}
          onMouseOut={() => handleHover()}
          onClick={() => handleChord(chord)}>{chord.name}</button>
      ))}
      <button className="button" onClick={playProgression}>
        <span className="icon">
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </button>
      <button className="button" onClick={handleRandomize}>
        <span className="icon">
          <FontAwesomeIcon icon={faDice} />
        </span>
        <span>Randomize</span>
      </button>
    </div>
    <Piano startNote="C4" endNote="E6" highlightNotes={highlightNotes} renderAdditionalKeyLabel={renderInsideKey} />
    <StudyNotes>{`
  `}</StudyNotes>
  </div>);

};


export default IntroChords;