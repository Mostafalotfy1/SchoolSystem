import React,{useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import Styles from "../../styles/request/studentItem.module.css";
import Modal from 'react-bootstrap/Modal'
import StudentI from "../../assets/student.png";
import Button from 'react-bootstrap/Button'
export default function StudentTable({ data }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className={Styles.studentItem}>
      <div className="row flex-nowrap align-items-center">
        {/* img  */}
        <div className="col">
          <div className={Styles.img}>
            <img src={StudentI} alt={data.name} className="img-fluid" />
          </div>
        </div>
        {/* name  */}
        <div className="col">
          <div className={Styles.name}>
            <h6 className={Styles.nameText}>{data.name}</h6>
          </div>
        </div>
        {/* ser  */}
        <div className="col">
          <div className={Styles.ser}>
            <h6 className={Styles.serText}>{data.ser}</h6>
          </div>
        </div>
        {/* school */}
        <div className="col">
          <div className={Styles.school}>
            <h6 className={Styles.schoolText}>{data.school}</h6>
          </div>
        </div>
        {/* recorded  */}
        <div className="col">
          <h6 className={Styles.recorded}>
            {data.recorded ? "مسجل" : "غير مسجل"}
          </h6>
        </div>
        {/* pay  */}
        <div className="col">
          <h6 className={Styles.pay}>
            {data.pay ? "تم دفع المصاريف" : "لم يتم دفع المصاريف"}
          </h6>
        </div>
        {/* dotted  */}
        <div className="col">
        <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
  الدفع
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1" onClick={handleShow}>سداد</Dropdown.Item>
    <Dropdown.Item href="#/action-2" onClick={handleShow}>Another action</Dropdown.Item>
  
  </Dropdown.Menu>
</Dropdown>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      </div>
    </div>
  );
}
