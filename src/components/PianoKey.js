import cx from 'classnames';
import { solfegeName, isNaturalNote } from '../utils/notes';
import { useSynth } from '../utils/synth';

const PianoKey = ({ note, onPlay, highlight, renderAdditionalKeyLabel, noDrag }) => {
  const { notesPlaying } = useSynth();
  const classNames = cx('pianoKey', isNaturalNote(note) ? 'whiteKey' : 'blackKey', { playing: notesPlaying[note] }, { highlight });
  const keyProps = {};
  if (onPlay) {
    keyProps.onMouseDown = e => { e.stopPropagation(); onPlay(); }
    if (!noDrag) {
      keyProps.onMouseOver = e => { e.stopPropagation(); e.buttons === 1 && onPlay(); }
    }
  }
  return (<div role="link" className={classNames} {...keyProps}>
    {renderAdditionalKeyLabel(note)}
    <div className="solfege">{solfegeName(note)}</div>
    <div className="noteName">{note}</div>
  </div>);
};

export default PianoKey;