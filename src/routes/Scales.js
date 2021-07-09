import { useState } from 'react';
import { Scales } from '../constants'; 
import Piano from '../components/Piano';

const ScalesRoute = () => {

    const [ scale, setScale ] = useState('Ionian');

    const startNote = Scales[scale][0] + '4';
    const endNote = Scales[scale][ Scales[scale].length - 1 ] + '5';

    return (<div>
        <select onChange={(e) => setScale(e.target.value)}>
        {Object.keys(Scales).map(scaleName => (
            <option value={scaleName} key={scaleName}>{scaleName}</option>
        ))}
        </select>
        <h1>{scale} {startNote}-{endNote}</h1>
        <Piano startNote={startNote} endNote={endNote} />
    </div>);

};


export default ScalesRoute;