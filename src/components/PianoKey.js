import cx from 'classnames';
import { isBlackKey } from '../utils/piano';

const PianoKey = ({ note, onPlay }) => {
    const classNames = cx('pianoKey', isBlackKey(note) ? 'blackKey' : 'whiteKey');
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