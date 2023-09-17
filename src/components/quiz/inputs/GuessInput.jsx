import handleGuess from "../events/handleGuess";

const GuessInput = (params) => {
  return <div className='form-group'>
    <label htmlFor='guess'><b>Enter answer here:</b></label>
    <input
      type='text'
      id='guess'
      name='guess'
      className='form-control my-2'
      onChange={handleGuess(params)}
    />
  </div>
};

export default GuessInput;