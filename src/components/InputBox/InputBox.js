import React from 'react';

function InputBox({ handleAddItem, maxGuessLength }) {
  const [label, setLabel] = React.useState('');
  const [enabled, setEnabled] = React.useState(true);
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();

        setLabel('');
        if (!handleAddItem(label)) {
          setEnabled(false);
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={label}
        disabled={!enabled}
        pattern={`[A-Z]{${maxGuessLength},${maxGuessLength}}`}
        maxLength={maxGuessLength}
        onChange={(event) => {
          setLabel(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default InputBox;
