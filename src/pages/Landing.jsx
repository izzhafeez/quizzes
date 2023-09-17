import Preview from 'components/quiz/Preview';
import quizzes from 'data/info/quizzes.json';

const Landing = () => {
  const quizzesList = Object.entries(quizzes).map(([k, v]) => ({...v, key: k}))
  return <>
    {quizzesList.map(q => Preview({ link: q.key }))}
  </>
};

export default Landing;