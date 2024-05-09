import construccion from '../assets/construccion.png';
import Modal from 'react-bootstrap/Modal';
import Boton from './button';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="modal_pos"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{ fontFamily: 'MiFuente' }}>
          <h2>{props.titulo}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ textAlign: 'center' }}>
                    
            {props.bandera ? props.contenido :   <p>Queridos amigos y familiares, Estamos rebosantes de alegría al anunciar la llegada inminente de nuestra pequeña princesa.<br/>Cada latido de su corazón nos llena de amor y anticipación, y no podemos esperar a conocerla y abrazarla.<br/>Esta dulce niña ya ha traído tanta luz a nuestras vidas, y estamos emocionados de celebrar su próximo arribo con todos ustedes en un Baby Shower lleno de amor y expectativas.<br/>¡Su llegada es un regalo que estamos ansiosos por compartir con el mundo!</p>}
            {props.bandera ? "" :   <h2 style={{ fontFamily: 'MiFuente' }}> Con cariño, Palina & Yohovani</h2>}

        </Modal.Body>
        <Modal.Footer>
          <Boton onClick={props.onHide} texto={"Cerrar"}></Boton>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;