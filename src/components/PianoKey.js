import React from 'react';
import { solfegeName, isNaturalNote } from 'utils/notes';
import { useSynth } from 'utils/synth';
import styles from 'styles/components/Piano.module.scss';
import cx from 'classnames';


const PianoKey = ({ note, onPlay, highlight, renderAdditionalKeyLabel, noDrag }) => {
  const { notesPlaying } = useSynth();
  const classNames = cx(styles.pianoKey, isNaturalNote(note) ? styles.whiteKey : styles.blackKey, { [styles.playing]: notesPlaying[note] }, { [styles.highlight]: highlight });
  const keyProps = {};
  if (onPlay) {
    keyProps.onMouseDown = e => { e.stopPropagation(); onPlay(); }
    if (!noDrag) {
      keyProps.onMouseOver = e => { e.stopPropagation(); e.buttons === 1 && onPlay(); }
    }
  }
  return (<div role="link" className={classNames} {...keyProps}>
    {renderAdditionalKeyLabel(note)}
    <div className={styles.solfeg}>{solfegeName(note)}</div>
    <div className={styles.noteName}>{note}</div>
  </div>);
};

export default PianoKey;