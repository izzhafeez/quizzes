import getGrade from "../helper/getGrade";

const handleEnd = ({ setGrade, setFeatures, correct, features }) => () => {
  setGrade(getGrade(correct/features.length));
  setFeatures(features.map(feature => {
    feature.setStyle(feature.get('style'));
    return feature;
  }));
};

export default handleEnd;