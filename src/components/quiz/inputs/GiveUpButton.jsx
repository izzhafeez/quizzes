import handleGiveUp from "../events/handleGiveUp";

const GiveUpButton = (params) => {
  return <p>
    {`${params.correct}/${params.features.length}`} guessed <button onClick={handleGiveUp(params)}>Give Up</button>
  </p>
};

export default GiveUpButton;