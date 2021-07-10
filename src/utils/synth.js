import React, { useContext } from 'react';
import * as Tone from "tone";

// https://react.christmas/2020/15
// https://www.guitarland.com/MusicTheoryWithToneJS/PlayMajorScale.html
// https://www.devbridge.com/articles/tonejs-coding-music-production-guide/

const synth = new Tone.PolySynth().toDestination();
const SynthContext = React.createContext({});

const useSynth = () => {
  const { notes, setNotes, ref } = useContext(SynthContext);

  function playNote(note, duration=0.25, delay=0) {
    const time = Tone.now() + delay;
    synth.triggerAttackRelease(note, duration, time);
    Tone.Draw.schedule(function(){
      setNotes({ ...ref.current, [note]: true });
    }, time);
    Tone.Draw.schedule(function(){
      setNotes({ ...ref.current, [note]: false });
    }, time + duration);
  }
  
  function playNotes(notes, delay=0.35) {
    notes.forEach((note,i) => {
      playNote(note, 0.25, i * delay);
    })
  }

  return { playNote, playNotes, notes };
};



export {
  useSynth,
  SynthContext
};
