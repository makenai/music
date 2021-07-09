import { Notes, FlatToSharp, NoteRegex } from '../constants';

export class Note {
    constructor(note) {
        if (typeof note === 'string') {
            const parts = NoteRegex.exec(note);
            this.note = parts[1];
            this.octave = Number(parts[2]);
        }
        if (typeof note === 'number') {
            this.note = Notes[note % 12];
            this.octave = Math.floor(note / 12);
        }
        console.log(this.note, this.octave)
    }

    toString() {
        return `${this.note}${this.octave}`;
    }

    valueOf() {
        const normalizedNote = FlatToSharp[this.note] || this.note;
        return (this.octave * 12) + Notes.indexOf(normalizedNote);
    }
}

export const notesBetween = (from, to) => {
    const startNote = new Note(from);
    const endNote = new Note(to);
    if (startNote > endNote) {
        throw 'Bad Notes';
    }
    const notes = [ startNote ];
    for (let i=startNote.valueOf() + 1; i<endNote.valueOf(); i++) {
        notes.push(new Note(i));
    }
    notes.push(endNote);
    return notes.map(note => note.toString());
}
