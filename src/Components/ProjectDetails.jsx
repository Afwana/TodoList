import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap';


function ProjectDetails({ displayCard }) {
    // const [cardDisplay, setCardDisplay] = useState([])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)



    return (
        <>
            <button className='btn'><i className="fa-solid fa-arrow-right" style={{ fontSize: '25px' }} onClick={handleShow}></i>  </button>
            {
                displayCard &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> {displayCard?.name} </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className='fs-5'> {displayCard?.details} </p> <br />
                        <h5>Done By Using : {displayCard?.skill} </h5>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>
    )
}


export default ProjectDetails