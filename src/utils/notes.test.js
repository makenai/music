import { Note, notesBetween, addOctaves } from './notes';
import { BadNoteError, BadNoteRangeError } from '../constants';

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