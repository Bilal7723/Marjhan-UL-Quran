import {React ,useState } from 'react';
import { Col,Row,Button,Modal, } from 'react-bootstrap'; 
function Navdiv (){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return(
   <div className="Navmodel top-menu">
      <Modal show={show} 
                onHide={handleClose} 
                backdrop="static"
                keyboard={false} 
                centered={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Marjan ul Quran</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Quran Application!!!!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary">Understood</Button>
                </Modal.Footer>
      </Modal> 
        <Row>
          <Col >
          <div className="floatStart">
              <ul sm={8} md={8} lg={8}>
                  <li onClick={handleShow}>About</li>
                  <li onClick={handleShow}> FAQ </li>
                  <li onClick={handleShow}> News </li>
                  <li> Docs </li>
              </ul>
          </div>
          </Col>
          <Col>
          <div className="floatEnd">
            <ul sm={4} md={4} lg={4}>
              <li onClick={handleShow}> Share </li>
              <li onClick={handleShow}> Join </li>
              <li onClick={handleShow}> Contact </li>
            </ul>
          </div>
          </Col>
        </Row>
    </div> 
);

}
export default Navdiv;


