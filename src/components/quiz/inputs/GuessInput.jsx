import handleGuess from "../events/handleGuess";

const GuessInput = (params) => {
  return <div className="grid gap-1">
    <label htmlFor="guess font-semibold">Enter answer here</label>
    <input
      type='text'
      id='guess'
      name='guess'
      className='py-1 px-2 border-[1px] w-80 border-lrt-light rounded-md'
      placeholder='Guess...'
      onChange={handleGuess(params)}
    />
    <p>{params.features.length} possible answers</p>
  </div>
};

export default GuessInput;