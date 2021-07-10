import { useState } from 'react';
import { Scales } from '../constants'; 
import Piano from '../components/Piano';
import { addOctave } from '../utils/notes';
import { playNotes } from '../utils/synth';
import { last } from 'lodash';


const ScalesRoute = () => {
    const [ scale, setScale ] = useState('Ionian');
    const scaleNotes = Scales[scale]; 
    const startNote = scaleNotes[0] + '4';
    const endNote = last(scaleNotes) + '5';

    const handleSequence = () => {
        playNotes(scaleNotes);
    }

    return (<div>
        <div className="box controls">
            <div>
                <label className="label">Scale</label>
                <div className="select">
                    <select onChange={(e) => setScale(e.target.value)}>
                    {Object.keys(Scales).map(scaleName => (
                        <option value={scaleName} key={scaleName}>{scaleName}</option>
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


export default ScalesRoute;