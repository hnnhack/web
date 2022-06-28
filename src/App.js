import './App.css';
import Countdown from './Countdown'

const App = () => {
  return (
    <div className="App">
      <Countdown 
        timeTillDate="07 08 2022, 6:00 am" 
        timeFormat="MM DD YYYY, h:mm a" 
      />
      <header className="App-header">
        <h1>Welkom naar Erjel - ICT DIENSTEN!</h1>
        <h3>Onze website gaat gauw active zijn.</h3>
        <p>
          Vragen?<br /><br />
          <b>Telefoon:</b>  +31 6 30527571 <br />
          <b>email:</b>  info@erjel.nl
        </p>
      </header>
    </div>
  );
}

export default App;
