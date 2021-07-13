import React, { useContext } from 'react';
import { isArray } from 'lodash';
import * as Tone from "tone";

// https://react.christmas/2020/15
// https://www.guitarland.com/MusicTheoryWithToneJS/PlayMajorScale.html
// https://www.devbridge.com/articles/tonejs-coding-music-production-guide/

const synth = new Tone.PolySynth().toDestination();
const SynthContext = React.createContext({});

/**
 * Given a single note or array of notes, return an object with boolean value of status
 * @param {string|string[]} note 
 * @param {boolean} status 
 * @example 
 * // returns { "A4": true, "E5" true }
 * toggleNote(['A4', 'E5'], true)
 * @returns {Object}
 */
const toggleNotes = (note, status) => isArray(note)
    ? note.reduce((notes, note) => ({ ...notes, [note]: status }), {})
    : { [note]: status };

const useSynth = () => {
  const { notesPlaying, setNotesPlaying, ref } = useContext(SynthContext);

  function playNote(note, duration=0.3, delay=0) {
    const time = Tone.now() + delay;
    synth.triggerAttackRelease(note, duration, time);
    Tone.Draw.schedule(function(){
      setNotesPlaying({ ...ref.current, ...toggleNotes(note, true) });
    }, time);
    Tone.Draw.schedule(function(){
      setNotesPlaying({ ...ref.current, ...toggleNotes(note, false) });
    }, time + duration - 0.05);
  }
  
  function playNotes(notes, delay=0.35) {
    notes.forEach((note,i) => {
      playNote(note, 0.25, i * delay);
    })
  }

  return { playNote, playNotes, notesPlaying };
};



export {
  useSynth,
  SynthContext
};
