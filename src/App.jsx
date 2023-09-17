import quizzes from 'data/info/quizzes';
import './App.css';
import GeoQuiz from 'components/quiz/GeoQuiz';

const App = () => {
  const { key, name, data, getText, getStyle, getColor } = quizzes[0];
  return (
    <div className="App">
      {GeoQuiz({ data, getText, getStyle, getColor })}
    </div>
  );
}

export default App;
