import { notesBetween, isNaturalNote } from "./notes";
import { sample } from 'lodash';

/**
 * Return a random note in the given range
 */
 export const randomNote = (from='A0', to='C8', { natural=false }) => {
  const notePool = notesBetween(from, to).filter(natural ? isNaturalNote : () => true);
  return sample(notePool);
};

/**
 * Return a red, yellow or green classname depending on percentage score
 */
export const getScoreClassname = (score) => {
  let scoreClass = 'is-danger';
  if (score > 60)
    scoreClass = 'is-warning';
  if (score > 80)
    scoreClass = 'is-success';
  return scoreClass; 
};