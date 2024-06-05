import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Boton from './button';
import Button from 'react-bootstrap/Button';

function Whatsapp() {
    return (
      <Container>
        <p style={{ fontFamily: 'MiFuente', fontSize: 30 }}>Tienes Dudas?</p>
        <Row>
          <Col>
            <Row>
                <Button style={{ width: 120, fontSize: 14, height: 60}}><a style={{ color: 'white' }} href="https://wa.me/524922183156?text=Hola%20Yohovani%20te%20escribo%20por%20que%20tengo%20dudas%20con%20respecto%20al%20baby%20shower" ><i className="fa fa-whatsapp"><p style={{ fontFamily: 'MiFuente' }}>Escribele a mi Papi</p></i></a><span></span><span></span><span></span><span></span></Button>
            </Row>
          </Col>
          <Col>
            <Row>
                <Button style={{ width: 120, fontSize: 14, height: 60}}><a style={{ color: 'white' }} href="https://wa.me/524924269997?text=Hola%20Paulina%20te%20escribo%20por%20que%20tengo%20dudas%20con%20respecto%20al%20baby%20shower" ><i className="fa fa-whatsapp"><p style={{ fontFamily: 'MiFuente' }}>Escribele a mi Mami</p></i></a><span></span><span></span><span></span><span></span></Button>
            </Row>
          </Col>
        </Row><br />
        <Row>
          <Col>
            <Row>
                <Button style={{ width: 120, fontSize: 14, height: 75}}><a style={{ color: 'white' }} href="https://wa.me/524922562566?text=Hola%20Olivia%20te%20escribo%20por%20que%20tengo%20dudas%20con%20respecto%20al%20baby%20shower" ><i className="fa fa-whatsapp"><p style={{ fontFamily: 'MiFuente' }}>Escribele a mi Abuelita Olivia</p></i></a><span></span><span></span><span></span><span></span></Button>
            </Row>
          </Col>
          <Col>
            <Row>
            <Button style={{ width: 120, fontSize: 14, height: 75}}><a style={{ color: 'white' }} href="https://wa.me/524923687667?text=Hola%20Ana%20te%20escribo%20por%20que%20tengo%20dudas%20con%20respecto%20al%20baby%20shower" ><i className="fa fa-whatsapp"><p style={{ fontFamily: 'MiFuente' }}>Escribele a mi Abuelita Ana</p></i></a><span></span><span></span><span></span><span></span></Button>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Whatsapp;
