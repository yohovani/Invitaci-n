import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/images/globos.png';
import princesa from './assets/images/princesa.png';
import construccion from './assets/construccion.png';
import cancion from './assets/audio/Te_Esperaba.mp3';
import pikachu from './assets/images/pikachu.png'
import Boton from './components/button'
import MyVerticallyCenteredModal from './components/modal'
import Modal from 'react-bootstrap/Modal';

function App() {
  const [audio] = useState(new Audio(cancion)); // Crear instancia de Audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMsjBebe, setModalMsjBebe] = React.useState(false);

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
      <img src={globos} className="globos img-fluid" />
      <Container fluid className="margen">
        <img src={princesa} className="princesa" /><br />
        <h2 style={{ fontFamily: 'MiFuente' }}>La dulce espera está por terminar</h2><br />
        
        <a className="play-btn"  onClick={togglePlay} ></a>< br />
        <p style={{ fontFamily: 'MiFuente' }}>{isPlaying ? 'Pausar la canción que eligieron para mi' : 'Reproducir la canción que eligieron para mi' }</p>
        
        <Boton onClick={() => setModalShow(true)} texto={"Mensaje de mi Mami y mi Papi" }></Boton>< br />
        <img src={pikachu} className="princesa" /><br />

        <Boton onClick={() => setModalMsjBebe(true)} texto={"Mensaje de mi Para ti" }></Boton>
      
        <img src={construccion} className="princesa" /><br />
        <p>Mi Papi esta trabajando en lo que falta aguanten</p><br></br>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        titulo={"Mensaje de mis Papis"} 
        contenido={""}
        flag = {false}
      />

      <MyVerticallyCenteredModal
        show={modalMsjBebe}
        onHide={() => setModalMsjBebe(false)}
        titulo={"Mensaje de mi Para ti"} 
        contenido={"Aqui va un video que mi tia Perla va a hacer no la presionen por que luego le da amsiedad, dejen que tenga mas fotos mias para que lo haga"}
        flag = {true}
      />
      </Container>
    </>
  );
}

export default App;
