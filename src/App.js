import './App.css';
import { MdCamera } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>f<MdCamera className='icono' />cus</h1>
      <p className='bienvenida'>Bienvenido! Ayudanos a darte una mejor experiencia</p>
      <div className='btn-portada'>Fotógrafo</div>
      <div className='btn-portada'>Espectador</div>
    </div>
  );
}



export default App;
