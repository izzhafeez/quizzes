import getGrade from "../helper/getGrade";

const handleGiveUp = ({ setCompleted, setGrade, setFeatures, itemPositions, correct, allFeatures }) => () => {
  setCompleted(itemPositions);
  setGrade(getGrade(correct/allFeatures.length));
  setFeatures(allFeatures);
};

export default handleGiveUp;