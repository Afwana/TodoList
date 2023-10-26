import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
    const [formData, setFormData] = useState({
        id: '', name: '', skill: '', details: ''
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAdd = (e) => {
        e.preventDefault()
        const data = JSON.parse(localStorage.getItem('data')) || [];
        data.push(formData);
        localStorage.setItem('data', JSON.stringify(data));
        setFormData({ id: '', name: '', skill: '', details: '' });
        handleClose()
    }

    return (
        <>
            <div>
                <button className='btn fs-2' onClick={handleShow}> <i class="fa-solid fa-folder-plus"> </i> </button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Upload Project </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" name='id' value={formData.id} placeholder="ID" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Project Name" name='name' value={formData.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="FrameWorks" name="skill" value={formData.skill} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Project Details" name="details" value={formData.details} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAdd}> Upload </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Add