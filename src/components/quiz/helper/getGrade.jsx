const getGrade = percentage => {
  switch (true) {
    case percentage >= 0.9:
      return 'A for Average';
    case percentage >= 0.8:
      return 'B for BBC Food';
    case percentage >= 0.7:
      return 'C for Colander';
    case percentage >= 0.6:
      return 'D for Disowned';
    case percentage >= 0.5:
      return 'E for Emotional Damage';
    case percentage >= 0.4:
      return 'F for Failure';
    case percentage >= 0.3:
      return 'G for Gordon Ramen';
    case percentage >= 0.2:
      return 'H for Haiyaa';
    case percentage >= 0.1:
      return 'I for Ijiot';
    default:
      return 'J for Jamie Oliver';
  }
};

export default getGrade;