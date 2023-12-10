import React, { useState } from 'react';
import pizzas from '../pizzasdata';  // Assuming 'pizzasdata' is in the correct path
import { Modal } from 'react-bootstrap';
export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{margin:'70px'}} className='shadow-lg p-3 mb-5 bg-white rounded'>
     <div onClick={handleShow}>
     <h1>{pizza.name}</h1>
      <img src={pizza.image} className="img.fluid" style={{ height: '200px', width: '200px' }} />


     </div>

      <div className="flex-container">
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select className ='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
            {pizza.varients.map((variant) => {
              return <option key={variant} value={variant}>{variant}</option>
            })}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className ='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {
              return <option key={i + 1} value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Price: {pizza.prices[varient] * quantity} Rs/-</h1>
        </div>
        <div className='m-1 w-100'>
          <button className="btn" onClick={handleClose}>ADD TO CART</button>
        </div>
      </div>
      <Modal show={show} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className="img-fluid" style={{height:'400px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn'>CLOSE</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

// Assuming you are using the Pizza component somewhere and passing a pizza object like this:
const SampleComponent = () => {
  const samplePizza = pizzas[0];
  return (
    <Pizza pizza={samplePizza} />
  );
}
