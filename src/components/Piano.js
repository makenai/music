import { notesBetween } from '../utils/notes';
import PianoKey from './PianoKey';
import { playNote } from '../utils/synth';
import './Piano.scss';

const Piano = ({
    startNote= 'C4',
    endNote='C5'
}) => {
    const notes = notesBetween(startNote, endNote);
    return (<div className="piano">
        {notes.map(note => <PianoKey note={note} key={note} onPlay={() => playNote(note)}/>)}
    </div>);
};

export default Piano;