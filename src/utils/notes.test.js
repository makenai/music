import { Note } from './notes';

it('can convert numbers to notes', () => {
  expect(new Note(0).toString()).toEqual('A0');
  expect(new Note(3).toString()).toEqual('C1');
  expect(new Note(87).toString()).toEqual('C8');
});

it('can convert notes to numbers', () => {
  expect(new Note('A0').valueOf()).toEqual(0);
  expect(new Note('C1').valueOf()).toEqual(3);
  expect(new Note('C8').valueOf()).toEqual(87);
});