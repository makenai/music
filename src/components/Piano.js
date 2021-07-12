import { notesBetween } from '../utils/notes';
import PianoKey from './PianoKey';
import { useSynth } from '../utils/synth';
import { noop } from 'lodash-es';
import './Piano.scss';

const Piano = ({
    startNote= 'C4',
    endNote='C5',
    highlightNotes=[],
    onPlay=noop,
    renderAdditionalKeyLabel=noop,
    noDrag
}) => {
    const { playNote } = useSynth();
    const notes = notesBetween(startNote, endNote);
    const handlePlay = (note) => playNote(note);
    return (<div className="piano">
        {notes.map(note => <PianoKey 
            note={note} 
            key={note} 
            onPlay={(e) => (onPlay || handlePlay)(note)} 
            highlight={highlightNotes.indexOf(note) > -1}
            renderAdditionalKeyLabel={renderAdditionalKeyLabel}
            noDrag={noDrag}
        />)}
    </div>);
};

export default Piano;