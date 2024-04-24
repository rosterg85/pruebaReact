import logo from './logo.svg';
import './App.css';
import Saludo from './practicas/saludo';
const elemento= <h1>Hola Mundo</h1>
const name='Jorge'
const elemento2=<h2>Hola {name}</h2>
function App() {
  return (
    <div className="App">
     {elemento}
     {elemento2}
     <Saludo/>
    </div>
  );
}

export default App;
