//import logo from './logo.svg';
import './App.css';
/*import Saludo from './practicas/saludo';
import Saludo2 from './practicas/Saludo2';
import Producto from './practicas/Producto';

import Contador from './practicas/contador';
import Contclick from './practicas/Contclick';
import Titulo from './practicas/Titulo';
import Contador2 from './practicas/Contador2';
import Factorial from './practicas/Factorial';
import ComponentePadre from './practicas/Temacontext';
*/
import Futbol from './practicas/Futbol';
import Formulario from './practicas/Formulario';


/* 
const elemento= <h1>Hola Mundo</h1>
const name='Jorge'
const elemento2=<h2>Hola {name}</h2>
*/
function App() {
   /* <div className="App">
     {elemento}
     {elemento2}
     <Saludo/>
     <Saludo2/>
     <Producto nombre="Producto 1"  descripcion="Descripcion del producto 1" precio={100*2} />
     <Producto nombre="Silla"  imagen = "/logo192.png" alternativo="imagen de silla" descripcion="silla negra " precio={100*5} />
     <Contador/>
    </div>
    */
   return(
   /* <div className="App">
     <Contador inicial={10} incremento = "2" decremento = "2"/>
      <Contador inicial={3} incremento = "12" decremento = "4"/>
      <Contador/>
      <Contclick/>
      <Titulo/>
      <Contador2/>
      <Factorial/>
      <ComponentePadre/>
    </div>*/
    <div className="App">
      <Futbol/>
      <Formulario/>
    </div>
     
  );
}

export default App;
