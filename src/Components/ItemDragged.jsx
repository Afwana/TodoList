import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';

function ItemDragged() {
  const [completed, setCompleted] = useState([])

  useEffect(() => {
    const handleCustomEvent = (event) => {
      const comProject = event.detail
      setCompleted(prevData => [...prevData, comProject])
    }

    document.addEventListener('customDragEvent', handleCustomEvent);

    return () => {
      document.removeEventListener('customDragEvent', handleCustomEvent);
    }
  }, [])

  // const handleCustomDragEvent = (event) => {
  //   const eventData = event.detail
  //   setCompleted(eventData)
  // }

  document.addEventListener('customDragEvent', (event) => {
    const eventData = event.detail;
    console.log(eventData);
  });
  console.log(completed);

  return (
    <>
      {
        completed.map((item, index)=>(
          <Card key={index} className='mb-3'>
            <Card.Body>
              <Card.Title className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                  <h4 className='me-4'> {item?.id} </h4>
                  <h4> {item?.name} </h4>
                </div>
                <div>
                  <i className='fa-solid fa-circle-check'></i>
                </div>
              </Card.Title>
              <p> {item?.details} </p>
              <h5> {item?.skill} </h5>
            </Card.Body>
          </Card>
        ))
      }
    </>
  )
}

export default ItemDragged