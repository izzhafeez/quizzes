import schoolsData from 'data/json/schools.json';
import mrtData from 'data/json/mrt.json';
import { getMRTColor, getSchoolColor } from './getColor';
import purifyBasic, { purifyGuess, purifySchool } from 'components/quiz/helper/purify';

const geoQuizzes = [
  {
    key: 'schools',
    name: 'Schools of Singapore',
    data: schoolsData,
    getText: school => purifyBasic(school.title),
    getColor: getSchoolColor,
    purifyGuess: purifySchool
  },
  {
    key: 'mrt',
    name: 'MRT Stations of Singapore',
    data: mrtData,
    getText: mrt => purifyBasic(mrt.title),
    getColor: getMRTColor,
    purifyGuess: purifyGuess
  }
];

export default geoQuizzes;