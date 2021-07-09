import { Notes, FlatToSharp, NoteRegex } from '../constants';

export class Note {
    constructor(note) {
        if (typeof note === 'string') {
            const parts = NoteRegex.exec(note);
            this.note = parts[1];
            this.octave = Number(parts[2]);
        }
        if (typeof note === 'number') {
            const noteNumber = note % 12;
            this.note = Notes[noteNumber];
            this.octave = Math.floor(note / 12) + 
                (noteNumber >= 3 ? 1 : 0); // Octaves change on C, not on A
        }
    }

    toString() {
        return `${this.note}${this.octave}`;
    }

    valueOf() {
        const normalizedNote = FlatToSharp[this.note] || this.note;
        const noteNumber = Notes.indexOf(normalizedNote);
        const octaveNumber = this.octave - (noteNumber >= 3 ? 1 : 0);
        return (octaveNumber * 12) + noteNumber; 
    }
}

export const notesBetween = (from, to) => {
    const startNote = new Note(from);
    const endNote = new Note(to);
    if (startNote > endNote) {
        throw new Error('BadNotes');
    }
    const notes = [ startNote ];
    for (let i=startNote.valueOf() + 1; i<endNote.valueOf(); i++) {
        notes.push(new Note(i));
    }
    notes.push(endNote);
    return notes.map(note => note.toString());
}
