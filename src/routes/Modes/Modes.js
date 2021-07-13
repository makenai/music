import { useState } from 'react';
import { Modes } from '../../constants';
import Piano from '../../components/Piano';
import StudyNotes from '../../components/StudyNotes';
import { addOctaves } from '../../utils/notes';
import { useSynth } from '../../utils/synth';
import { first, last, shuffle } from 'lodash';
import MusicNotation from '../../components/MusicNotation';

const ModesRoute = () => {
  const { playNotes, notesPlaying } = useSynth(); 
  const [mode, setMode] = useState('Ionian');
  const [octave, setOctave] = useState(4);
  const modeNotes = addOctaves(Modes[mode], octave);
  const activeNotes = modeNotes.filter(note => notesPlaying[note]);

  const handleSequence = () => {
    playNotes(modeNotes);
  }

  const handleRandom = () => {
    playNotes(shuffle([ ...modeNotes, ...modeNotes ]));
  }

  return (<div>
    <div className="box controls">
      <div>
        <label className="label">Mode</label>
        <div className="select">
          <select onChange={(e) => setMode(e.target.value)} value={mode}>
            {Object.keys(Modes).map(modeName => (
              <option value={modeName} key={modeName}>{modeName}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="label">Octave</label>
        <div className="select">
          <select onChange={(e) => setOctave(e.target.value)} value={octave}>
            {[ 0, 1, 2, 3, 4, 5, 6, 7, 8 ].map(octave => (
              <option value={octave} key={octave}>{octave}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="button is-primary" onClick={handleSequence}>Play In Sequence</button>
      <button className="button is-primary" onClick={handleRandom}>Play Random</button>
    </div>
    <MusicNotation notes={modeNotes} padNotes={8} highlightNotes={activeNotes} />
    <Piano startNote={first(modeNotes)} endNote={last(modeNotes)} />
    <StudyNotes>{`
- Modes are diatonic scales, meaning they are made of fives tones and two semitones.
- **I** **D**on't **P**unch **L**ike **M**uhammed **A**li
- Assignment was to listen to the various modes and get used to their sounds and qualities.
  `}</StudyNotes>
  </div>);

};


export default ModesRoute;