
import Button from 'react-bootstrap/Button';
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
          {props.titulo}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <p>
              {props.contenido}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
export default MyVerticallyCenteredModal;