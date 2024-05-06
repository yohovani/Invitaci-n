import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/images/globos.png';
import princesa from './assets/images/princesa.png';
import construccion from './assets/construccion.png';
import cancion from './assets/audio/Te_Esperaba.mp3';
import Button from 'react-bootstrap/Button';
import pikachu from './assets/images/pikachu.png'
import Boton from './components/button'
import MyVerticallyCenteredModal from './components/modal'
import Modal from 'react-bootstrap/Modal';

function App() {
  const [audio] = useState(new Audio(cancion)); // Crear instancia de Audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción
  const [modalShow, setModalShow] = React.useState(false);

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
  ///>
        
//  
        

  return (
    <>
      <br />
      <img src={globos} className="globos img-fluid" />
      <Container fluid className="margen">
        <img src={princesa} className="princesa" /><br />
        <h2 style={{ fontFamily: 'MiFuente' }}>La dulce espera está por terminar</h2><br />
        
        <Button onClick={togglePlay}>{isPlaying ? 'Pausar' : 'Reproducir'}</Button>< br />< br />

        <Boton onClick={() => setModalShow(true)} texto={"Mensaje de mi Mami y mi Papi" }></Boton>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        titulo={"Mensaje de mis Papis"} 
        contenido={"Queridos amigos y familiares, Estamos rebosantes de alegría al anunciar la llegada inminente de nuestra pequeña princesa. Cada latido de su corazón nos llena de amor y anticipación, y no podemos esperar a conocerla y abrazarla. Esta dulce niña ya ha traído tanta luz a nuestras vidas, y estamos emocionados de celebrar su próximo arribo con todos ustedes en un Baby Shower lleno de amor y expectativas. ¡Su llegada es un regalo que estamos ansiosos por compartir con el mundo! Con cariño, Palina & Yohovani"}

      /><br/><br/><br/><br/>

        <img src={pikachu} className="princesa" /><br />
        <img src={construccion} className="princesa" /><br />
        <p>Mi Papi esta trabajando en lo que falta aguanten</p>
      </Container><br></br>
    </>
  );
}

export default App;
