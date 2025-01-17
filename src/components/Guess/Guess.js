import React from 'react';
import { range } from '../../utils';

function Guess({ items, maxGuessLength }) {
  return (
    <>
      <div className="guess-results">
        {items.map(({ id, guessSlice }) => (
          <p key={id} className="guess">
            {guessSlice.map(({ letter, status }, index) => (
              <span key={index} className={`cell ${status}`}>
                {letter}
              </span>
            ))}
          </p>
        ))}
      </div>
    </>
  );
}

export default Guess;
