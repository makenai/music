/*
 * Octave | MIDI Note Numbers
 * -------+------------------------------------------------
 *        |   C  C#   D  D#   E   F  F#   G  G#   A  A#   B
 * -------+------------------------------------------------
 * -1     |   0   1   2   3   4   5   6   7   8   9  10  11
 *  0     |  12  13  14  15  16  17  18  19  20  21  22  23
 *  1     |  24  25  26  27  28  29  30  31  32  33  34  35
 *  2     |  36  37  38  39  40  41  42  43  44  45  46  47
 *  3     |  48  49  50  51  52  53  54  55  56  57  58  59
 *  4     |  60  61  62  63  64  65  66  67  68  69  70  71
 *  5     |  72  73  74  75  76  77  78  79  80  81  82  83
 *  6     |  84  85  86  87  88  89  90  91  92  93  94  95
 *  7     |  96  97  98  99 100 101 102 103 104 105 106 107
 *  8     | 108 109 110 111 112 113 114 115 116 117 118 119
 *  9     | 120 121 122 123 124 125 126 127
 * 
 *  from http://www.music.mcgill.ca/~ich/classes/mumt306/StandardMIDIfileformat.html
 */

export const Notes = [
    'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
];

export const Solfege = [
    'Do', 'Di', 'Re', 'Ri', 'Mi', 'Fa', 'Fi', 'So', 'Si', 'La', 'Li', 'Ti'
];

export const NaturalNotes = [
    'C', 'D', 'E', 'F', 'G', 'A', 'B'
];

export const NoteRegex = new RegExp(/^([A-G][b#]?)(-?\d+)$/);
export const NaturalNoteRegex = new RegExp(/^([A-G])(-?\d+)$/);

export const FlatToSharp = {
    'Db': 'C#',
    'Eb': 'D#',
    'Gb': 'F#',
    'Ab': 'G#',
    'Bb': 'A#'
};

export const Modes = {
    Ionian:     'CDEFGABC'.split(''),
    Dorian:     'DEFGABCD'.split(''),
    Phrygian:   'EFGABCDE'.split(''),
    Lydian:     'FGABCDEF'.split(''),
    Mixoludian: 'GABCDEFG'.split(''),
    Aeolian:    'ABCDEFGA'.split(''),
    Locrian:    'BCDEFGAB'.split('')
};

export const Intervals = {
    0: 'Perfect unison',
    1: 'Minor second',
    2: 'Major second',
    3: 'Minor third',
    4: 'Major third',
    5: 'Perfect fourth',
    6: 'Tritone',
    7: 'Perfect fifth',
    8: 'Minor sixth',
    9: 'Major sixth',
    10: 'Minor seventh',
    11: 'Major seventh',
    12: 'Perfect octave'
};

export const ABCAccidentals = {
     '': '',
    '#': '^',
    'b': '_'
};

export const MajorScalePattern = 'TTSTTTS';
export const MinorScalePattern = 'TSTTSTT';


export const ChordTypes = {
    '4-3': 'maj',
    '3-4': 'min',
    '3-3': 'dim'
};

export class BadNoteError extends Error {}
export class BadNoteRangeError extends Error {}
