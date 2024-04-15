import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./ButtomsImage.css"
export const ButtomsImage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class="index_article-icons"> 
            <i class="fa-solid fa-heart"></i>
            <i variant="primary" onClick={handleShow} class="fa-regular fa-comment"></i>
            <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header className='modalHome' closeButton>
        <img className='img--modal--home' src="/images/tree-736885_1280.jpg" alt="" />
      </Modal.Header>
      <Modal.Body>este es el comentario que va debajo de la imagen</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
            <i class="fa-solid fa-arrow-down"></i>
        </div>  
        
      )
}
