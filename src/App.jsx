import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/globos.png';
import princesa from './assets/princesa.png';
import construccion from './assets/construccion.png';
import cancion from './assets/audio/Te_Esperaba.mp3';
import Button from 'react-bootstrap/Button';

function App() {
  const [audio] = useState(new Audio(cancion)); // Crear instancia de Audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción

  // Función para controlar la reproducción del audio
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause(); // Pausar la reproducción
    } else {
      audio.play(); // Iniciar la reproducción
    }
    setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
  };

  // Efecto para iniciar la reproducción del audio al interactuar con la página por primera vez
  useEffect(() => {
    const handleInteraction = () => {
      audio.play(); // Iniciar la reproducción del audio
      setIsPlaying(true); // Establecer el estado de reproducción a true
      document.removeEventListener('click', handleInteraction); // Eliminar el listener después de la primera interacción
    };

    document.addEventListener('click', handleInteraction); // Agregar un listener para el evento click
    return () => {
      document.removeEventListener('click', handleInteraction); // Limpiar el efecto al desmontar el componente
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <>
      <br />
      <img src={globos} className="globos img-fluid" />
      <Container className="margen">
        <img src={princesa} className="princesa" /><br />
        <h2 style={{ fontFamily: 'MiFuente' }}>La dulce espera está por terminar</h2><br />
        <Button onClick={togglePlay}>{isPlaying ? 'Pausar' : 'Reproducir'}</Button>< br />< br />
        <img src={construccion} className="princesa" /><br />
        <p>Mi Papi esta trabajando en lo que falta aguanten</p>
      </Container>
    </>
  );
}

export default App;
