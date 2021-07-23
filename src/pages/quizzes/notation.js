import React, { useState } from 'react'; 
import useLocalStorageState from 'use-local-storage-state';
import { useSynth } from 'utils/synth';
import { Note } from 'utils/notes';
import { getScoreClassname, randomNote } from 'utils/quiz';
import { NaturalNotes } from 'appConstants';
import MusicNotation from 'components/MusicNotation';
import cx from 'classnames';

const NotesQuiz = () => {
  const [ scoreData, setScoreData ] = useLocalStorageState('notationQuizScore', { total: 0, correct: 0, previousRound: null });
  
  const getNote = () => randomNote('A3', 'C6', { natural: true }); 
  
  const getNextNote = (prevNote=null) => {
    let newNote = getNote();
    if (prevNote) {
      while (newNote === prevNote) {
        newNote = getNote();
      }
    }
    return newNote;
  };

  const isCorrect = (question, guess) => new Note(question).naturalNote() === guess;
  const [ question, setQuestion ] = useState(getNextNote(scoreData?.previousRound?.[0]));
  const { playNote } = useSynth();

  const handleReset = e => {
    e.preventDefault();
    setScoreData.reset();
  }

  const handleAnswer = (note) => {
    const addCorrect = isCorrect(question, note) ? 1 : 0;
    if (addCorrect) {
      playNote(question, 0.5);
    }
    setScoreData({
      total: scoreData.total + 1,
      correct: scoreData.correct + addCorrect,
      previousRound: [ question, note ],
    });
    setQuestion(getNextNote(question));
  }

  const lastRoundCorrect = scoreData.previousRound && isCorrect.apply(null, scoreData.previousRound);
  const scorePercentage = scoreData.total ? Math.round(scoreData.correct / scoreData.total * 100) : 0;

  return (<div suppressHydrationWarning={true}>
    <div className="box">
      <h2 className="title">What note is this?</h2>
      <div>
        {question && <MusicNotation width={200} notes={[ question ]} padNotes={1} />}
      </div>
      <div className="controls mt-2">
        {NaturalNotes.map(note => (
          <button 
            className={cx('button', 'is-primary')} 
            key={note} 
            onClick={() => handleAnswer(note)}>{note}</button>
        ))}
      </div>
    </div>
    {scoreData?.previousRound && (<div className="box">
      <div className="columns">
        <div className="column is-one-quarter">
          <article className={cx('message', lastRoundCorrect ? 'is-success' : 'is-danger')}>
            <div className="message-header">
              <p>Previous Question</p>
            </div>
            <div className="message-body">
              <div className="is-flex is-justify-content-space-evenly is-align-content-center">
                <MusicNotation width={200} notes={[ scoreData.previousRound[0] ]} padNotes={1} />
                <div className="is-size-2 mt-3 has-text-black">{scoreData.previousRound[0]}</div>
              </div>
              {!lastRoundCorrect && (<p className="has-text-centered is-size-5">You chose <b>{scoreData.previousRound[1]}</b>.</p>)}
            </div>
          </article>
        </div>
        <div className="column is-one-fifth has-text-centered">
            <div className="is-size-4">Score:</div> 
            <div className={cx('tag is-large is-size-3', getScoreClassname(scorePercentage) )}>{scorePercentage}%</div> 
            <div className="is-size-6">{scoreData.correct} of {scoreData.total} correct.</div>
            <a className="button is-small mt-4" onClick={handleReset}>Reset Score</a>
        </div>
      </div>
    </div>)}
  </div>);

};


export default NotesQuiz;