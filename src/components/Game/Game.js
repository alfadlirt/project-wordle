import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputBox from '../InputBox/InputBox';
import Guess from '../Guess/Guess';
import * as CONSTANT from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialGuesses = range(
    0,
    CONSTANT.NUM_OF_GUESSES_ALLOWED
  ).map((index) => ({
    id: index, //Math.random(),
    guess: null,
    guessSlice: range(0, CONSTANT.NUM_OF_GUESSES_MAX_LENGTH).map(
      () => ({
        letter: null,
        status: null,
      })
    ),
  }));

  const [guessList, setGuessList] = React.useState(initialGuesses);
  const [counter, setCounter] = React.useState(0);
  const [status, setStatus] = React.useState(null);

  function handleAddItem(newValue) {
    const checkedGuess = checkGuess(newValue, answer);

    setGuessList((prevGuessList) =>
      prevGuessList.map((guess) =>
        guess.id === counter
          ? {
              ...guess,
              guess: newValue,
              guessSlice: checkedGuess,
            }
          : guess
      )
    );

    const nextCounter = counter + 1;
    setCounter(nextCounter);
    if (nextCounter == CONSTANT.NUM_OF_GUESSES_ALLOWED) {
      const correctCount = checkedGuess.filter(
        (guess) => guess.status === 'correct'
      ).length;

      setStatus(
        correctCount === CONSTANT.NUM_OF_GUESSES_MAX_LENGTH
          ? 'win'
          : 'lose'
      );

      return false;
    }

    return true;
  }

  return (
    <>
      <Guess items={guessList} />
      <Banner type={status} answer={answer} counter={counter} />
      <InputBox
        handleAddItem={handleAddItem}
        maxGuessLength={CONSTANT.NUM_OF_GUESSES_MAX_LENGTH}
      />
    </>
  );
}

export default Game;
