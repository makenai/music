import { 
  Notes, 
  Solfege, 
  FlatToSharp, 
  NoteRegex, 
  NaturalNoteRegex,
  Intervals,
  ABCAccidentals,
  BadNoteError, 
  BadNoteRangeError
} from '../constants';
import { repeat, toLower } from 'lodash';

/**
 * Get the numeric value of a single note like 'A' or 'Cb' for sorting
 * @param {string} note 
 * @returns {number} noteNumber
 */
const noteValue = note => Notes.indexOf(FlatToSharp[note] || note);

/**
 * Note class for sorting, comparison etc.
 */
export class Note {
  constructor(note) {
    if (typeof note === 'string') {
      const noteMatch = NoteRegex.exec(note);
      if (!noteMatch) {
        throw new BadNoteError(`"${note}" was not in a valid format`);
      }
      this.note = noteMatch[1];
      if (noteValue(this.note) === -1) {
        throw new BadNoteError(`"${this.note}" is not a valid note`)
      }
      this.octave = Number(noteMatch[2]);
    }
    if (typeof note === 'number') {
      const noteNumber = note % 12;
      this.note = Notes[noteNumber];
      this.octave = Math.floor(note / 12) - 1;
    }
  }

  toString() {
    return `${this.note}${this.octave}`;
  }

  valueOf() {
    const noteNumber = noteValue(this.note);
    const octaveNumber = this.octave + 1;
    return (octaveNumber * 12) + noteNumber;
  }

  baseNote() {
    return this.note.substring(0,1);
  }

  accidental() {
    return this.note.substring(1,2);
  }

  octave() {
    return this.octave;
  }

  solfege() {
    return Solfege[noteValue(this.note)];
  }

  toABCNotation() {
    const note = `${ABCAccidentals[this.accidental()]}${this.baseNote()}`;
    if (this.octave < 4) 
      return `${note}${repeat(',', 4 - this.octave)}`;
    if (this.octave === 4)
      return note;
    if (this.octave === 5)
      return toLower(note);
    if (this.octave > 5)
      return `${toLower(note)}${repeat("'", this.octave - 5)}`;
  }

}

/**
 * Given two notes with octaves, return an array of all of the notes between them, inclusively
 * @param {string} from 
 * @param {string} to 
 * @returns {array}
 */
export const notesBetween = (from, to) => {
  const startNote = new Note(from);
  const endNote = new Note(to);
  if (startNote > endNote) {
    throw new BadNoteRangeError('Start note must be lower than end note');
  }
  const notes = [startNote];
  for (let i = startNote.valueOf() + 1; i < endNote.valueOf(); i++) {
    notes.push(new Note(i));
  }
  notes.push(endNote);
  return notes.map(note => note.toString());
}

/**
 * Given a collection of sorted notes without octaves, add the given octave
 * @param {array} notes 
 * @param {number} startOctave 
 * @returns {array}
 */
export const addOctaves = (notes, startOctave = 4) => {
  let octave = Number(startOctave);
  let prevNoteNumber = null;
  return notes.map((note, i) => {
    const noteNumber = noteValue(note);
    if (prevNoteNumber !== null && noteNumber < prevNoteNumber) octave += 1;
    prevNoteNumber = noteNumber;
    return `${note}${octave}`;
  });
};

/**
 * Return the solfege name for a note
 * @param {*} note 
 * @returns 
 */
export const solfegeName = (note) => {
  return new Note(note).solfege();
};

/**
 * Returns true of note is note a sharp or flat
 */
export const isNaturalNote = note => NaturalNoteRegex.test(note);

/**
 * C-style comparison function for two note strings
 * @param {string} a 
 * @param {string} b 
 * @returns {number} -1, 0, or 1
 */
export const noteCmp = (a, b) => {
  const noteA = new Note(a);
  const noteB = new Note(b);
  if (noteA.valueOf() === noteB.valueOf()) {
    return 0;
  }
  return noteA > noteB ? -1 : 1;
}

/**
 * Covnert an array of notes to ABC notation
 * @param {string[]} notes
 * @returns {string} ABC notated string
 */
 export const notesToABC = (notes) => {
  if (!notes || notes.length === 0) {
    return [];
  }
  return notes.map(note => new Note(note).toABCNotation());
};


export const getInterval = (from, to) => {
  const notes = notesBetween(from, to);
  const semitones = notes.length - 1;
  return {
    semitones,
    ...(Intervals[semitones] ? { name: Intervals[semitones] } : {})
  };
};
