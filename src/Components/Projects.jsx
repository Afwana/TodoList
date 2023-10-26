import React, { useEffect, useState } from 'react'
import ProjectDetails from './ProjectDetails'
import ItemDragged from './ItemDragged'


function Projects() {
  const [data,setData] = useState([])

  useEffect(()=>{
    const storedData = JSON.parse(localStorage.getItem('data'))
    if(storedData){
      setData(storedData)
    }
  },[])
  // console.log(data);

  // const getItemById = (id) => {
  //   const foundItem = storedItems.find((item) => item.id === id);
  //   if (foundItem) {
  //     setSelectedItemData(foundItem);
  //   } else {
  //     console.log('Item not found.');
  //   }
  // };

  // const handleSelection = (id) => {
  //   setSelectedItem(id);
  //   getItemById(id);
  // };

  const dragStarted = (e,id)=>{
    console.log("Drag Started...");
    const storedData = localStorage.getItem('data')
    if(storedData){
      const parsedData = JSON.parse(storedData);
      const foundItem = parsedData.find(item => item.id === id);
      if (foundItem) {
        const projectId = foundItem.id;
        console.log(projectId);
        const customEvent = new CustomEvent('customDragEvent', { detail: foundItem });
        document.dispatchEvent(customEvent);
      }
      else 
      {
        console.log("Item not found in localStorage.");
      }
    }
    else 
    {
      console.log("No data found in localStorage.");
    }
    
  }



  return (
    <>
      <ul className='mt-3 w-100'>
        {
        data?.map((item)=>(
            <li className='mb-3 p-2 me-5 d-flex justify-content-between align-items-center' draggable onDragStart={(e)=>dragStarted(e,item?.id)} style={{border:'solid',borderWidth:'1px'}}>
                <div className='d-flex'>
                  <h2 className='me-5'> {item.id} </h2>
                  <h2> {item.name} </h2>
                </div>
                <div>
                   {/* <button className='btn ms-5'> <i className='fa-solid fa-trash text-danger' onClick={handleRemove(item.id)}></i> </button> */}
                   <ProjectDetails displayCard={item} />
                </div>
            </li>
        )) 
        }
      </ul>
    </>
  )
}

export default Projects