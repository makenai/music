import { 
  Notes, 
  Solfege, 
  FlatToSharp, 
  NoteRegex, 
  NaturalNoteRegex,
  Intervals,
  ABCAccidentals,
  BadNoteError, 
  BadNoteRangeError,
  ChordTypes
} from 'appConstants';
import { repeat, toLower, max, uniq } from 'lodash';

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
      this._note = noteMatch[1];
      if (noteValue(this._note) === -1) {
        throw new BadNoteError(`"${this._note}" is not a valid note`)
      }
      this._octave = Number(noteMatch[2]);
    }
    if (typeof note === 'number') {
      const noteNumber = note % 12;
      this._note = Notes[noteNumber];
      this._octave = Math.floor(note / 12) - 1;
    }
  }

  toString() {
    return `${this._note}${this._octave}`;
  }

  valueOf() {
    const noteNumber = noteValue(this._note);
    const octaveNumber = this._octave + 1;
    return (octaveNumber * 12) + noteNumber;
  }

  naturalNote() {
    return this._note.substring(0,1);
  }

  accidental() {
    return this._note.substring(1,2);
  }

  note() {
    return this._note;
  }

  setNote(note) {
    this._note = note;
  }

  octave() {
    return this._octave;
  }

  setOctave(octave) {
    this._octave = octave;
  }

  solfege() {
    return Solfege[noteValue(this._note)];
  }

  toABCNotation() {
    const note = `${ABCAccidentals[this.accidental()]}${this.naturalNote()}`;
    if (this._octave < 4) 
      return `${note}${repeat(',', 4 - this._octave)}`;
    if (this._octave === 4)
      return note;
    if (this._octave === 5)
      return toLower(note);
    if (this._octave > 5)
      return `${toLower(note)}${repeat("'", this._octave - 5)}`;
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

/**
 * Apply a note pattern to a note in Tones and Semitones, returning an array of resulting notes
 * @param {string} note 
 * @param {string} pattern 
 */
export const applyTonePattern = (note, pattern='') => {
  let currentValue = new Note(note).valueOf();
  const notes = [ currentValue ];
  pattern.split('').forEach(tone => {
    if (tone === 'T') {
      currentValue += 2;
    } else if (tone === 'S') {
      currentValue += 1;
    }
    notes.push(currentValue);
  });
  return notes.map(note => new Note(note).toString());
}

/**
 * Get the notes for the nth degrees in a scale, going up an octave and looping as needed
 * @param {number[]} degrees 
 * @param {string[]} scaleNotes 
 */
export const getDegreesInScale = (degrees, scaleNotes) => {
  const highestDegree = max(degrees);
  const expandedScale = [];
  const loopCount = Math.ceil(highestDegree / scaleNotes.length);
  for (let i=0; i<loopCount;i++) {
    const notes = scaleNotes.map(scaleNote => {
      const note = new Note(scaleNote);
      note.setOctave(note.octave() + i);
      return note.toString();
    })
    expandedScale.push(...notes);
  }
  const uniqScale = uniq(expandedScale); // Probably a better way to do this?
  return degrees.map(degree => uniqScale[degree - 1]);
}

/**
 * Given some notes, give the name of a chord
 * @param {string[]} chordNotes
 */
export const chordName = (chordNotes) => {
  const notes = chordNotes.map(note => new Note(note));
  const rootNote = notes[0].note();
  const distances = [];
  let prevNote;
  notes.forEach(note => {
    if (prevNote) {
      distances.push(note.valueOf() - prevNote.valueOf());
    }
    prevNote = note;
  });
  const chordType = ChordTypes[distances.join('-')] || '???';
  return `${rootNote}${chordType}`;
};