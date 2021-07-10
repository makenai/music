import cx from 'classnames';
import { isBlackKey } from '../utils/piano';
import { useSynth } from '../utils/synth';

const PianoKey = ({ note, onPlay }) => {
    const { notes } = useSynth(); 
    const classNames = cx('pianoKey', isBlackKey(note) ? 'blackKey' : 'whiteKey', { playing: notes[note] } );
    const keyProps = {};
    if (onPlay) {
        keyProps.onMouseDown = onPlay;
        keyProps.onMouseOver = e => e.buttons === 1 && onPlay();
    }
    return (<div role="link" className={classNames} {...keyProps}>
        {note}
    </div>);
};

export default PianoKey;