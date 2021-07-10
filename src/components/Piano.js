import { notesBetween } from '../utils/notes';
import PianoKey from './PianoKey';
import { useSynth } from '../utils/synth';
import './Piano.scss';

const Piano = ({
    startNote= 'C4',
    endNote='C5',
    highlightNotes=[]
}) => {
    const { playNote } = useSynth();
    const notes = notesBetween(startNote, endNote);
    return (<div className="piano">
        {notes.map(note => <PianoKey note={note} key={note} onPlay={() => playNote(note)} highlight={highlightNotes.indexOf(note) > -1}/>)}
    </div>);
};

export default Piano;