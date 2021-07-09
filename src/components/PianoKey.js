import cx from 'classnames';
import { isBlackKey } from '../utils/piano';

const PianoKey = ({ note, onClick=()=>{} }) => {
    const classNames = cx('pianoKey', isBlackKey(note) ? 'blackKey' : 'whiteKey');
    return (<div className={classNames} onClick={onClick}>
        {note}
    </div>);
};

export default PianoKey;