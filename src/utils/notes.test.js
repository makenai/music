import { Note, notesBetween, addOctaves, getInterval, noteCmp, notesToABC, applyTonePattern, getDegreesInScale, chordName } from './notes';
import { BadNoteError, BadNoteRangeError, MajorScalePattern } from 'appConstants';

describe('Note class', () => {

  it('can convert notes to midi numbers', () => {
    expect(new Note('C-1').valueOf()).toEqual(0);
    expect(new Note('A0').valueOf()).toEqual(21);
    expect(new Note('C1').valueOf()).toEqual(24);
    expect(new Note('C4').valueOf()).toEqual(60); // Middle C
    expect(new Note('C8').valueOf()).toEqual(108);
    expect(new Note('G9').valueOf()).toEqual(127);
  });
  
  it('can convert midi numbers to notes', () => {
    expect(new Note(0).toString()).toEqual('C-1');
    expect(new Note(21).toString()).toEqual('A0');
    expect(new Note(24).toString()).toEqual('C1');
    expect(new Note(60).toString()).toEqual('C4'); // Middle C
    expect(new Note(108).toString()).toEqual('C8');
    expect(new Note(127).toString()).toEqual('G9');
  });
  
  it('throws errors on bad notes', () => {
    expect(() => new Note('B#2')).toThrow(BadNoteError);
    expect(() => new Note('Cb4')).toThrow(BadNoteError);
    expect(() => new Note('E#5')).toThrow(BadNoteError);
    expect(() => new Note('Fb2')).toThrow(BadNoteError);
    expect(() => new Note('Z1')).toThrow(BadNoteError);
  });
  
  it('can normalize flats to sharps', () => {
    expect(new Note('Bb5').valueOf()).toEqual(new Note('A#5').valueOf());
  });
  
  it('can compare notes', () => {
    const C4 = new Note('C4');
    const A5 = new Note('A5');
    const As5 = new Note('A#5');
    expect(C4 < A5).toBeTruthy();
    expect(C4 > A5).toBeFalsy();
    expect(As5 > A5).toBeTruthy();
  });

  it('can return natural notes, accidentals, and octaves', () => {
    const cs5 = new Note('C#5');
    expect(cs5.naturalNote()).toEqual('C');
    expect(cs5.accidental()).toEqual('#');
    expect(cs5.note()).toEqual('C#');
    const df4 = new Note('Db5'); 
    expect(df4.naturalNote()).toEqual('D');
    expect(df4.accidental()).toEqual('b');
    expect(df4.note()).toEqual('Db');
    const a4 = new Note('A4');
    expect(a4.naturalNote()).toEqual('A');
    expect(a4.accidental()).toEqual('');
    expect(a4.note()).toEqual('A');
  });

  it('can convert a note to ABC notation', () => {
    expect(new Note('C0').toABCNotation()).toEqual('C,,,,');
    expect(new Note('C1').toABCNotation()).toEqual('C,,,');
    expect(new Note('C2').toABCNotation()).toEqual('C,,');
    expect(new Note('C3').toABCNotation()).toEqual('C,');
    expect(new Note('C4').toABCNotation()).toEqual('C');
    expect(new Note('C5').toABCNotation()).toEqual('c');
    expect(new Note('C6').toABCNotation()).toEqual("c'");
    expect(new Note('C7').toABCNotation()).toEqual("c''");
    expect(new Note('C8').toABCNotation()).toEqual("c'''");
    expect(new Note('A#6').toABCNotation()).toEqual("^a'");
    expect(new Note('Db4').toABCNotation()).toEqual("_D");
  });

});

describe('notesBetween', () => {
  
  it('can calculate ranges of notes', () => {
    expect(notesBetween('C3', 'C4')).toEqual([ 'C3', 'C#3', 'D3', 'D#3', 'E3',  'F3', 'F#3', 'G3',  'G#3', 'A3',  'A#3', 'B3', 'C4' ]);
    expect(notesBetween('A4', 'A5')).toEqual([ 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5',  'G#5', 'A5']);
    expect(notesBetween('A0', 'C8').length).toEqual(88); // Piano Keys
    expect(() => notesBetween('C4', 'C3')).toThrow(BadNoteRangeError);
  });

});

describe('addOctaves', () => {

  it('can add octaves to notes in a sequence', () => {
    const phrygianMode = addOctaves(['E',  'F',  'G',  'A',  'B',  'C',  'D',  'E' ], 4);
    expect(phrygianMode).toEqual(  ['E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5']);
  
    const cMajor = addOctaves(['C',  'D',  'E',  'F',  'G',  'A',  'B',  'C' ], '2');
    expect(cMajor).toEqual(  ['C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3']);
  });

});


describe('noteCmp', () => {
  it('compares two notes', () => {
    expect(noteCmp('C4', 'C4')).toEqual(0);
    expect(noteCmp('A#3', 'Bb3')).toEqual(0);
    expect(noteCmp('C5', 'C4')).toEqual(-1);
    expect(noteCmp('A4', 'C8')).toEqual(1);
  });
});

describe('notesToABC', () => {

  it('returns an empty array with no notes', () => {
    expect(notesToABC()).toEqual([]);
    expect(notesToABC([])).toEqual([]);
  })
  
  it('converts octaves 4-6', () => {
    expect(notesToABC(
      ['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5','A5','B5','C6'])
    ).toEqual(
      ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'c', 'd', 'e', 'f', 'g', 'a', 'b', "c'"]
    );
  });
})


describe('getInterval', () => {

  it('can calc interval between two notes', () => {
    const cg = getInterval('C4', 'G4');
    expect(cg.semitones).toEqual(7);
    expect(cg.name).toEqual('Perfect fifth');
    // expect(cg.pattern).toEqual(['T', 'T', 'S', 'T']);

    const ae = getInterval('A4', 'E5');
    expect(ae.semitones).toEqual(7);
    expect(ae.name).toEqual('Perfect fifth');

    // expect(ae.pattern).toEqual(['T', 'S', 'T', 'T']);

    const ce = getInterval('C4', 'E4');
    expect(ce.semitones).toEqual(4);
    expect(ce.name).toEqual('Major third');
    // expect(ce.pattern).toEqual(['T', 'T']);

    const ac = getInterval('A4', 'C5');
    expect(ac.semitones).toEqual(3);
    expect(ac.name).toEqual('Minor third');
    // expect(ce.pattern).toEqual(['T', 'S']);
  });

});

describe('applyTonePattern', () => {
  it('can create some major scales', () => {
    expect(applyTonePattern('C4', MajorScalePattern)).toEqual(['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5']);
    expect(applyTonePattern('G4', MajorScalePattern)).toEqual(['G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5', 'G5']);
  });
});

describe('getNotesInScale', () => {
  it('can return notes by degrees', () => {
    const Cmaj = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
    expect(getDegreesInScale([1,3,5],  Cmaj)).toEqual([ 'C4', 'E4', 'G4' ]);
    expect(getDegreesInScale([2,4,6],  Cmaj)).toEqual([ 'D4', 'F4', 'A4' ]);
    expect(getDegreesInScale([3,5,7],  Cmaj)).toEqual([ 'E4', 'G4', 'B4' ]);
    expect(getDegreesInScale([4,6,8],  Cmaj)).toEqual([ 'F4', 'A4', 'C5' ]);
    expect(getDegreesInScale([5,7,9],  Cmaj)).toEqual([ 'G4', 'B4', 'D5' ]);
    expect(getDegreesInScale([6,8,10], Cmaj)).toEqual([ 'A4', 'C5', 'E5' ]);
    expect(getDegreesInScale([7,9,11], Cmaj)).toEqual([ 'B4', 'D5', 'F5' ]);
  });
});

describe('chordName', () => {
  it('can name some chords', () => {
    expect(chordName([ 'C4', 'E4', 'G4' ])).toEqual('Cmaj');
    expect(chordName([ 'D4', 'F4', 'A4' ])).toEqual('Dmin');
    expect(chordName([ 'E4', 'G4', 'B4' ])).toEqual('Emin');
    expect(chordName([ 'F4', 'A4', 'C5' ])).toEqual('Fmaj');
    expect(chordName([ 'G4', 'B4', 'D5' ])).toEqual('Gmaj');
    expect(chordName([ 'A4', 'C5', 'E5' ])).toEqual('Amin');
    expect(chordName([ 'B4', 'D5', 'F5' ])).toEqual('Bdim');
  });

  it('does not always know', () => {
    expect(chordName([ 'B4', 'D5', 'G5' ])).toEqual('B???');
  });
});

