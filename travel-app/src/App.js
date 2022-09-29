import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import TravelData from './TravelData';

function App() {
  const travelSpots = TravelData.map(spot => <Card spot= {spot} />)
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
          {travelSpots}
         


      </div>
    </div>
  );
}

export default App;
