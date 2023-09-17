import handleGiveUp from "../events/handleGiveUp";

const GiveUpButton = (params) => {
  return <p>
    {`${params.correct}/${params.features.length}`} guessed <button onClick={handleGiveUp(params)} className='btn btn-danger py-1 ms-2'>Give Up</button>
  </p>
};

export default GiveUpButton;