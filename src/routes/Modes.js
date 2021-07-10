import { useState } from 'react';
import { Modes } from '../constants'; 
import Piano from '../components/Piano';
import { addOctave } from '../utils/notes';
import { playNotes } from '../utils/synth';
import { last } from 'lodash';


const ModesRoute = () => {
    const [ mode, setMode ] = useState('Ionian');
    const modeNotes = Modes[mode]; 
    const startNote = modeNotes[0] + '4';
    const endNote = last(modeNotes) + '5';

    const handleSequence = () => {
        playNotes(modeNotes);
    }

    return (<div>
        <div className="box controls">
            <div>
                <label className="label">Mode</label>
                <div className="select">
                    <select onChange={(e) => setMode(e.target.value)}>
                    {Object.keys(Modes).map(modeName => (
                        <option value={modeName} key={modeName}>{modeName}</option>
                    ))}
                    </select>
                </div>
            </div>
            <button className="button is-primary" onClick={handleSequence}>Play In Sequence</button>
            <button className="button is-primary">Play Random</button>
        </div>
        <Piano startNote={startNote} endNote={endNote} />
    </div>);

};


export default ModesRoute;