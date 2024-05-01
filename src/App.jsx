import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/globos.png'
import princesa from './assets/princesa.png'
import cancion from './assets/audio/Te_Esperaba.mp3'
import Button from 'react-bootstrap/Button';

function App() {
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la reproducción del audio
  const togglePlay = () => {
    setIsPlaying(!isPlaying); // Cambia el estado de reproducción al hacer clic en el botón de reproducción/pausa
  };

  return (
    <>
    <br/>
    <img src={globos} className='globos img-fluid'/>
      <Container className='margen'>
        <img src={princesa} className='princesa'/><br/>
        <h2 style={{ fontFamily: 'MiFuente' }}>La dulce espera esta por terminar</h2><br/>

        <div>
          <audio src={cancion} autoPlay={isPlaying}/> {/* Utiliza el atributo autoPlay para iniciar la reproducción automáticamente si isPlaying es true */}
          <Button  onClick={togglePlay}>{isPlaying ? 'Pausar' : 'Reproducir'}</Button> {/* Botón para pausar/reproducir */}
        </div>
    </Container>
    </>
  )
}

export default App
