import { Route, Routes } from 'react-router';
import './App.css';
import quizTypes from 'data/info/quizTypes';

const App = () => {
  return <Routes>
    {quizTypes.map(type => type.quizzes.map(quiz =>
      <Route
        key={`${type.key}-${quiz.key}`}
        path={`/${type.key}/${quiz.key}`}
        element={type.format(quiz)}
      />
    ))}
  </Routes>
}

export default App;
