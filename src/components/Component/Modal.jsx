import {React,useState} from 'react'

function ModalBox() {
    const [smShow, setSmShow] = useState(false);
    return (
        <div>
    <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
        </div>
    )
}

export default ModalBox;
