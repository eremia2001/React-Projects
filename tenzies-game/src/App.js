import React from 'react';
import Die from './Die';
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'



function App() {
  const [tenzies,setTenzies] = React.useState( newGame() )
  const [gameWon, setGameWon] = React.useState(false)

console.log(tenzies)

React.useEffect( () => 
{
  const isWon = tenzies.every( (element) =>  element.isHeld  )
  const firstItem = tenzies[0].value;
  const allEqualItems = tenzies.every( (element) => element.value == firstItem  )

  if(isWon && allEqualItems)
  {
    setGameWon(true)
  }

},[tenzies])

function newGame()
{
  
  const myNewGame = []
  for(let i = 0; i < 10 ; i++)
  {
    myNewGame.push(generateNewDie())
  }
  return myNewGame
}

function generateNewDie()
{
  return {
  
    value: generateRandomNumber(),
    isHeld: false,
    id: nanoid()
  }
}

function generateRandomNumber()
{
  return Math.floor(Math.random() * 10) + 1;
}

function rollDice()
{

  const allHeld = tenzies.every((element) => element.isHeld )
  if(allHeld)
  {
    setGameWon(false)
    setTenzies(newGame())
  }

  setTenzies( oldTenzie => oldTenzie.map( element => {
      return ( element.isHeld ? element : generateNewDie() )
  } ))
 
}

function tenzieClick(id)
{
  setTenzies( oldTenzie => oldTenzie.map(element =>{
    return (element.id == id ? {...element, isHeld : !element.isHeld} : element)
  } )  )
}

const diceArray = tenzies.map((element) => <Die value = {element.value} isHeld={element.isHeld} id={element.id} tenzieClick={() => tenzieClick(element.id)} />  )

  return (
    <div className="App">
      {(gameWon && <Confetti />)}
      <div className='gameFrame'>
        <h1>Tenzies</h1>
        <p>Roll unitll all dice are the same. Click each die to freeze it at its current value between rolls</p>
        <div className='tenziesContainer'>
           {diceArray}
        </div>
        <button className='gameButton' onClick={rollDice} >{gameWon ? "You Won !" : "Roll"}</button>
      </div>
    </div>
  );
}

export default App;
