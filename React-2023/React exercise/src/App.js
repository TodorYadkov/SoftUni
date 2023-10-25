import './App.css';
import Heading from './Heading';
import Counter from './components/Counter';
import MovieList from './components/MovieList';
import Timer from './components/Timer';

function App() {
  const movies = [
    { title: 'Man of Steel', year: 2008, cast: ['Henry Cavil', 'Russell Crowe'] },
    { title: 'Harry Potter', year: 2008, cast: ['Daniel', 'Ema Watson'] },
    { title: 'Lord of the Rings', year: 2008, cast: ['Orlando Bloom'] },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Demo</h1>
        <h2>Timer</h2>
        <Timer start={5} />

        <h2>Counter</h2>
        <Counter canReset />

        <Heading text="World" />
        <MovieList movies={movies} />
      </header>
    </div>
  );
}

export default App;
