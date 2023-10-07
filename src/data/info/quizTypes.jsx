import GeoQuiz from 'components/quiz/GeoQuiz';
import geoQuizzes from './geoQuizzes';

const quizTypes = [
  {
    key: 'geo-quiz',
    format: (props) => <GeoQuiz {...props}/>,
    quizzes: geoQuizzes
  }
];

export default quizTypes;