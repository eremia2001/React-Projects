import './App.css';
import Joke from "./Joke"
import JokesData from "./JokesData"
function App() {
  const jokeElements = JokesData.map(joke => <Joke setup={joke.setup} punchline={joke.punchline} />)
  console.log(jokeElements)
  return (
    <div className="App">  
        {jokeElements} 
    </div>
  );
}
 // Ich kanns ausgeben weil jokeElements schon JSX-Objekte sind.
export default App;
