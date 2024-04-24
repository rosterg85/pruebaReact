import logo from './logo.svg';
import './App.css';
import Saludo from './practicas/saludo';
import Saludo2 from './practicas/Saludo2';
import Producto from './practicas/Producto';

const elemento= <h1>Hola Mundo</h1>
const name='Jorge'
const elemento2=<h2>Hola {name}</h2>
function App() {
  return (
    <div className="App">
     {elemento}
     {elemento2}
     <Saludo/>
     <Saludo2/>
     <Producto nombre="Producto 1"  descripcion="Descripcion del producto 1" precio={100*2} />
     <Producto nombre="Silla"  imagen = "/logo192.png" alternativo="imagen de silla" descripcion="silla negra " precio={100*5} />
    </div>
  );
}

export default App;
