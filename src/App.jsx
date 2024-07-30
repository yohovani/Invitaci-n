import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import globos from './assets/images/globos.png';
import princesa from './assets/images/princesa.png';
import construccion from './assets/construccion.png';
import cancion from './assets/audio/Te_Esperaba.mp3';
import pikachu from './assets/images/pikachu_name.png'
import Boton from './components/button'
import Whatsapp from './components/whatsapp';
import MyVerticallyCenteredModal from './components/modal'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cheems from './assets/cheems.jpg'
import Button from 'react-bootstrap/Button';


function App() {
  const [audio] = useState(new Audio(cancion)); // Crear instancia de Audio
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción
  const [modalShow, setModalShow] = React.useState(false);
  const [modalMsjBebe, setModalMsjBebe] = React.useState(false);
  const [modalConfirmar, setmodalConfirmar] = React.useState(false);
  const [modalMapa, setModalMapa] = React.useState(false);
  
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
        <Container>
          <Row className="justify-content-md-center">
            <Col xs={6} md={6}><Boton onClick={() => setModalShow(true)} texto={"Mensaje de mi Mami y mi Papi" }></Boton></Col><br />
            <Col xs={6} md={6}><Boton onClick={() => setModalMsjBebe(true)} texto={"Mensaje de mi Para ti" }></Boton></Col>
          </Row>
        </Container>
        
        <img src={pikachu} className="princesa" /><br />

        <Boton onClick={() => setmodalConfirmar(true)} texto={"Confirmar Asistencia" }></Boton>< br />
        <Boton onClick={() => setModalMapa(true)} texto={"Lugar del Evento" }></Boton>< br />
        <br/>
        <Whatsapp /><br /><br /><br />

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        titulo={"Mensaje de mis Papis"} 
        contenido={""}
        bandera = "false"
      />

      <MyVerticallyCenteredModal
        show={modalMsjBebe}
        onHide={() => setModalMsjBebe(false)}
        titulo={"Mensaje de mi Para ti"} 
        contenido={<Container><p>Aqui va un video que mi tia Perla va a hacer no la presionen por que luego le da amsiedad, dejen que tenga mas fotos mias para que lo haga</p><img src={cheems} className="princesa" /><br /></Container>}
        bandera = "true"
      />

      <MyVerticallyCenteredModal
        show={modalConfirmar}
        onHide={() => setmodalConfirmar(false)}
        titulo={"Confirmar Asistencia"} 
        contenido={<Container><iframe src="https://docs.google.com/forms/d/e/1FAIpQLScus3LeFk9kKYKwLyDU63TPC8QV0J1zshaTWTcxi83665sC9Q/viewform?embedded=true"  height="661">Cargando…</iframe></Container>}
        bandera = "true"
      />

    <MyVerticallyCenteredModal
        show={modalMapa}
        onHide={() => setModalMapa(false)}
        titulo={"Lugar de la fiesta"} 
        contenido={<Container><p>Es aqui para que no te pierdas</p><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d747.111319075421!2d-102.40447430529728!3d22.826612349749688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2smx!4v1722380283253!5m2!1ses-419!2smx" height="300"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Container>}
        bandera = "true"
      />
      </Container>
    </>
  );
}

export default App;
