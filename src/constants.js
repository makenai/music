export const NoteRegex = new RegExp(/^([A-G][b#]?)(-?\d+)$/);

export const Notes = [
    'A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'
];

export const FlatToSharp = {
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#',
    'Bb': 'A#'
};

export const Scales = {
    Ionian:     'CDEFGABC'.split(''),
    Dorian:     'DEFGABCD'.split(''),
    Phrygian:   'EFGABCDE'.split(''),
    Lydian:     'FGABCDEF'.split(''),
    Mixoludian: 'GABCDEFG'.split(''),
    Aeolian:    'ABCDEFGA'.split(''),
    Locrian:    'BCDEFGAB'.split('')
};