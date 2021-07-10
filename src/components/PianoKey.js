import cx from 'classnames';
import { isBlackKey } from '../utils/piano';
import { solfegeName } from '../utils/notes';
import { useSynth } from '../utils/synth';

const PianoKey = ({ note, onPlay, highlight }) => {
    const { notes } = useSynth(); 
    const classNames = cx('pianoKey', isBlackKey(note) ? 'blackKey' : 'whiteKey', { playing: notes[note] }, { highlight } );
    const keyProps = {};
    if (onPlay) {
        keyProps.onMouseDown = onPlay;
        keyProps.onMouseOver = e => e.buttons === 1 && onPlay();
    }
    return (<div role="link" className={classNames} {...keyProps}>
        <div className="solfege">{solfegeName(note)}</div>
        <div className="noteName">{note}</div>
    </div>);
};

export default PianoKey;