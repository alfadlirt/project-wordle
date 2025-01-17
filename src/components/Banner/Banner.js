import React from 'react';

function Banner({ type, answer, counter }) {
  // if (type == null) {
  //   return null; // If type is null, return nothing (renders nothing)
  // }

  const mapping = {
    win: 'happy',
    lose: 'sad',
  };
  console.log(type, answer, counter);
  return (
    mapping[type] && (
      <>
        <div className={`${mapping[type]} banner`}>
          {type == 'win' ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>{` ${counter} guesses`}</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{answer}</strong>.
            </p>
          )}
        </div>
      </>
    )
  );
}

export default Banner;
