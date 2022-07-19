import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function JobConf(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {`${props.jobName}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Master of:</h4>
        <h6>{`${props.info}`}</h6>
  
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {
            props.onHide(),
            props.reset()
        }}>Close
        </Button>
        <Button onClick={()=> {
            props.onHide(),
            props.selected()
        }}>Proceed</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobConf