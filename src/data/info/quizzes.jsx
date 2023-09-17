import schoolsData from 'data/json/schools.json';
import { getSchoolColor } from './getColor';
import { purifyUnder } from 'components/quiz/helper/purify';

const quizzes = [
  {
    key: 'school',
    name: 'Schools of Singapore',
    data: schoolsData,
    getText: school => purifyUnder(school.title),
    getColor: getSchoolColor
  }
];

export default quizzes;