import resetFeature from "./resetFeature";

const handleReset = ({ setCorrect, setCompleted, setGrade, setFeatures, features }) => {
  setCorrect(0);
  setCompleted({});
  setGrade('');
  setFeatures(features.map(resetFeature));
};

export default handleReset;