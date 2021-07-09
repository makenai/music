import { notesBetween } from '../utils/notes';
import PianoKey from './PianoKey';
import * as Tone from "tone";

// https://react.christmas/2020/15
// It seems like the problem is that you're making the octaves change at the A's, but they actually change at the Cs.

const Piano = ({
    startNote= 'C4',
    endNote='C5'
}) => {
    const synth = new Tone.Synth().toDestination();

    function playNote(note) {
      synth.triggerAttackRelease(note, "8n");
    }

    const notes = notesBetween(startNote, endNote);
    return (<div className="piano">
        {notes.map(note => <PianoKey note={note} key={note} onClick={() => playNote(note)}/>)}
    </div>);
};

export default Piano;