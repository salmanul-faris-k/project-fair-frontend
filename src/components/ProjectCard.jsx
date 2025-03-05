import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import serverurl from '../service/serviceurl';

function ProjectCard({pro}) {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '16rem' }} onClick={handleShow}>
      <Card.Img variant="top" style={{height:'250px'}} src={` ${serverurl}/upload/${pro?.projectimg}`} />
      <Card.Body>
        <Card.Title className='text-center'>{pro?.title}</Card.Title>
     
       
      </Card.Body>
    </Card>
    
    <Modal size='lg'  show={show} onHide={handleClose} className='mt-5'>
      <Modal.Header closeButton>
        <Modal.Title>Project Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="align-items-center">
          <Col md={6} className="text-center p-2">
            <img 
             src={` ${serverurl}/upload/${pro?.projectimg}`}
              alt=""
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6} className='p-2'>
            <h2 className="fw-bold">falksdfj</h2>
            <p><strong>Languages Used:</strong> {pro?.Languages}</p>
            <p><strong>Project Overview:</strong> {pro?.overview}</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className='w-100 d-flex justify-content-start'>
        <Button variant="secondary" href={pro?.github}target="_blank">
          <i className="fa-brands fa-github"></i> GitHub
        </Button>
        <Button variant="primary" href={pro?.website} target="_blank">
          <i className="fa-solid fa-link"></i> Live Demo
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default ProjectCard
