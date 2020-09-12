import React, { useState } from 'react'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import '../assets/scss/hook/shoppingCart.scss'
import { BsBagFill } from 'react-icons/bs'
import ShopCheckout from './ShopCheckout'

const ShoppingCart = (props) => {
  let [show, setShow] = useState(false)
  let [payment, setPayment] = useState('')
  let totalPrice = 0

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const renderList = () => {
    if (props && props.shoppingAll && props.shoppingAll.length > 0) {
      let items = props.shoppingAll.map((item, index) => {
        totalPrice += item.totalAmount
        return (
          <Row key={index}>
            <Col>{index}</Col>
            <Col md={5}>{item.title}</Col>
            <Col>{item.color}</Col>
            <Col>{item.size}</Col>
            <Col>{item.amount}</Col>
            <Col>{item.totalAmount}</Col>
          </Row>
        )
      })
      return items
    }
  }

  return payment === '' ? (
    <section>
      <BsBagFill
        id='shoppingCart'
        onClick={handleShow}
        style={{ fontSize: '1.75rem' }}
      />

      <Modal
        className='sm-12'
        centered
        size='lg'
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>購物車</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-right'>
          <Row>
            <Col>編號</Col>
            <Col md={5}>名稱</Col>
            <Col>顏色</Col>
            <Col>尺寸</Col>
            <Col>數量</Col>
            <Col>總價</Col>
          </Row>
          {renderList()}
          <hr />
          <Row>
            <Col>總金額</Col>
            <Col md={2}>{totalPrice}</Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <ShopCheckout changeDom={setPayment} onClick={handleClose} />
          <Button
            variant='outline-warning'
            className='ml-2'
            onClick={handleClose}
          >
            繼續購物
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  ) : (
    <div>
      {/* {React.createElement(payment, {}, null)} */}
    </div>
  )
}

export default ShoppingCart
