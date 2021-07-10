import * as Tone from "tone";
const synth = new Tone.Synth().toDestination();

function playNote(note) {
  synth.triggerAttackRelease(note, "8n");
}

function playNotes(notes) {
  for (const note of notes) {
    console.log(note);
  }
}

export {
  synth,
  playNote,
  playNotes
};
