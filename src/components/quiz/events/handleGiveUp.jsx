import getGrade from "../helper/getGrade";

const handleGiveUp = ({ setCompleted, setGrade, setFeatures, itemPositions, correct, features }) => () => {
  setCompleted(itemPositions);
  setGrade(getGrade(correct/features.length));
  setFeatures(features.map(feature => {
    feature.set('isAnswered', true);
    feature.setStyle(feature.get('style'));
    return feature;
  }));
};

export default handleGiveUp;