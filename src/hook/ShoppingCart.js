import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import '../assets/scss/hook/shoppingCart.scss'
import { BsBagFill } from 'react-icons/bs'

const ShoppingCart = (props) => {
  let [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <section>
      <BsBagFill
        id='shoppingCart'
        onClick={handleShow}
        style={{ fontSize: '1.75rem' }}
      />

      <Modal className='sm-12' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>購物車</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant='outline-danger' className='ml-2' onClick={handleClose}>
            前往結帳
          </Button>
          <Button variant='outline-warning' className='ml-2' onClick={handleClose}>
            繼續購物
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  )
}

export default ShoppingCart
