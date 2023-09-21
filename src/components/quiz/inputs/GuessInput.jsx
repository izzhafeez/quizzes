import handleGuess from "../events/handleGuess";

const GuessInput = (params) => {
  return <div>
    <label htmlFor='guess'><b>Enter answer here:</b></label>
    <input
      type='text'
      id='guess'
      name='guess'
      onChange={handleGuess(params)}
    />
  </div>
};

export default GuessInput;