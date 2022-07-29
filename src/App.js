import './App.css';
import { EstadoReact } from './components/EstadoReact';
import { Ejercicio } from './components/Ejercicio';
import { Efectos } from './components/Efectos';
import { CompAjax } from './components/CompAjax';

function App() {

  const today = new Date();
  
  function getYear(){
    return today.getFullYear();
  }

  return (
    <div className='container'>
      <EstadoReact></EstadoReact>
      <Ejercicio  year={getYear()}></Ejercicio>
      <Efectos ></Efectos>
      <CompAjax></CompAjax>
    </div>
  );
}

export default App;
