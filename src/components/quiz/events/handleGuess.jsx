const handleGuess = ({ setRecenter, setCompleted, setCorrect, setFeatures, handleGiveUp, completed, itemPositions, correct, features, purifyGuess }) => event => {
  setRecenter(false);
  const guess = purifyGuess(event.target.value);
  const positionsToChange = itemPositions[guess];
  if (!positionsToChange) {
    return;
  }

  if (!!completed[guess]) {
    return;
  }

  completed[guess] = true;
  setCompleted(completed);
  
  const totalCorrect = correct + positionsToChange.length;
  setCorrect(totalCorrect);
  setFeatures(features.map((f, i) => {
    if (positionsToChange.includes(i)) {
      f.set('isAnswered', true);
      f.setStyle(f.get('style'));
    }
    return f;
  }));

  event.target.value = '';
  if (totalCorrect === features.length) {
    handleGiveUp(true)();
  }
};

export default handleGuess;