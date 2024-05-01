import React, { useState, useRef, useEffect } from 'react';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/globos.png'
import princesa from './assets/princesa.png'
import cancion from './assets/audio/Te_Esperaba.mp3'
import Button from 'react-bootstrap/Button';

function App() {  
  const audioRef = useRef(null); // Referencia al elemento audio
  const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar la reproducción

  useEffect(() => {
    // Verificar si el audio debe estar reproduciéndose al principio
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]); // Ejecutar cuando isPlaying cambia

  const togglePlay = () => {
    setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
  };

  return (
    <>
    <br/>
    <img src={globos} className='globos img-fluid'/>
      <Container className='margen'>
        <img src={princesa} className='princesa'/><br/>
        <h2 style={{ fontFamily: 'MiFuente' }}>La dulce espera esta por terminar</h2><br/>

      <audio ref={audioRef} src={cancion} />

      {/* Botón para reproducir/pausar */}
      <Button onClick={togglePlay}>{isPlaying ? 'Pausar' : 'Reproducir'}</Button>
    </Container>
    </>
  )
}

export default App
