import { notesBetween } from '../utils/notes';
import PianoKey from './PianoKey';
import SynthContext from '../context/SynthContext';
import { useContext } from 'react';

const Piano = ({
    startNote= 'C4',
    endNote='C5'
}) => {
    const { playNote } = useContext(SynthContext);
    const notes = notesBetween(startNote, endNote);
    return (<div className="piano">
        {notes.map(note => <PianoKey note={note} key={note} onPlay={() => playNote(note)}/>)}
    </div>);
};

export default Piano;