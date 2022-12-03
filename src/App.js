import './css/App.css';
import Bienvenida from './pages/bienvenida';
import LoginSingup from './pages/login-singup';

function App() {
  return (
    <div className="App">
      <div className='w-sreen flex overflow-visible'>
        <Bienvenida />
        <LoginSingup />
      </div>
    </div>
  );
}



export default App;
