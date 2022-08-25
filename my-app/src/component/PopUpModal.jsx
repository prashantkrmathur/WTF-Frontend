import React, { useState } from 'react';
import {Form, InputGroup, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function PopUpModal(props) {
    const {show, setShow} = props
    const handleClose = (event) => {
        event.preventDefault();
        setShow(false);
    }
    const handleShow = () => setShow(true);

    return (
        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Body style={{ borderRadius: '6px' }} className='bg-dark text-white' >
                <h5 style={{ margin: '20px' }}>Please Fill the detail below and get two days free trail at any WTF gym near you.</h5>
                <p style={{margin:'20px'}}>
                    <InputGroup style={{ width: '90%', margin: 'auto' }} size='lg' className="mb-8 bg-dark text-white">
                        <Form.Control className="bg-dark text-white" placeholder='Enter Full Name *' aria-label="Large" required />
                    </InputGroup>
                </p>
                <p style={{ margin: '20px' }}>
                    <InputGroup style={{ width: '90%', margin: 'auto' }} size='lg' className="mb-8 bg-dark text-white">
                        <Form.Control className="bg-dark text-white" placeholder='Mobile Number *' aria-label="Large" required />
                    </InputGroup>
                </p>
                <p style={{ margin: '20px' }}>
                    <InputGroup style={{ width: '90%', margin: 'auto' }} size='lg' className="mb-8 bg-dark text-white">
                        <Form.Control className="bg-dark text-white" placeholder='Email' aria-label="Large" required />
                    </InputGroup>
                </p>
                <p style={{ margin: '20px' }}>
                    <InputGroup style={{ width: '90%', margin: 'auto' }} size='lg' className="mb-8 bg-dark text-white">
                        <Form.Control className="bg-dark text-white" placeholder='Enter your address *' aria-label="Large" required />
                    </InputGroup>
                </p>
                <div style={{display:'flex',justifyContent:'space-around'}} >
                    <Button as="a" variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button as="a" variant="danger">
                            Submit
                        </Button>
    
                </div>
            </Modal.Body>
            </Modal>
    );
}

export default PopUpModal;