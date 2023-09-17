const handleReset = ({ setCorrect, setCompleted, setGrade, setRecenter }) => {
  setCorrect(0);
  setCompleted({});
  setGrade('');
  setRecenter(true);
};

export default handleReset;