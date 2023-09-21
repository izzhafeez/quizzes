import GeoQuiz from 'components/quiz/GeoQuiz';
import geoQuizzes from './geoQuizzes';

const quizTypes = [
  {
    key: 'geo-quiz',
    format: GeoQuiz,
    quizzes: geoQuizzes
  }
];

export default quizTypes;