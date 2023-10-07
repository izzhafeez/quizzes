import setFeature from "./setFeature";

const handleGuess = ({ setCompleted, setCorrect, setFeatures, handleGiveUp, completed, itemPositions, correct, features, purifyGuess }) => event => {
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
  setFeatures(features.map((feature, i) => {
    if (positionsToChange.includes(i)) {
      setFeature(feature);
    }
    return feature;
  }));

  event.target.value = '';
  if (totalCorrect === features.length) {
    handleGiveUp()();
  }
};

export default handleGuess;