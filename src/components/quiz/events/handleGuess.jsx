import purify from "../helper/purify";

const handleGuess = ({ setRecenter, setCompleted, setCorrect, setFeatures, handleGiveUp, completed, itemPositions, correct, features }) => event => {
  setRecenter(false);
  const guess = purify(event.target.value);
  const positionsToChange = itemPositions[guess];
  if (!!positionsToChange) {
    if (!!completed[guess]) {
      return;
    }

    completed[guess] = true;
    setCompleted(completed);
    
    const totalCorrect = correct + positionsToChange.length;
    setCorrect(totalCorrect);
    setFeatures(features.map((f, i) => {
      if (positionsToChange.includes(i)) {
        f.setStyle(f.get('style'));
      }
      return f;
    }));

    event.target.value = '';
    if (totalCorrect === features.length) {
      handleGiveUp(true)();
    }
  };
};

export default handleGuess;