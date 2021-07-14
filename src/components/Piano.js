import React from 'react';
import { notesBetween } from 'utils/notes';
import PianoKey from './PianoKey';
import { useSynth } from 'utils/synth';
import { noop } from 'lodash';
import styles from 'styles/components/Piano.module.scss';

const Piano = ({
    startNote= 'C4',
    endNote='C5',
    highlightNotes=[],
    onPlay,
    renderAdditionalKeyLabel=noop,
    noDrag
}) => {
    const { playNote } = useSynth();
    const notes = notesBetween(startNote, endNote);
    const handlePlay = (note) => playNote(note);
    return (<div className={styles.piano}>
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