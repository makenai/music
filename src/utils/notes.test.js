import { Note } from './notes';

it('can convert notes', () => {
  expect(new Note(0).toString()).toEqual('A0');
  expect(new Note(3).toString()).toEqual('C1');
});