import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import '../assets/scss/hook/commodityItem.scss'

const CommodifyItem = (props) => {
  const [item, setItem] = useState('')

  useEffect(()=> {
      setItem(props.item)
  }, [props.item])

  return (
    <Card className="text-center" id="commodity-container">
      <Card.Img variant='top' src={item.img} />
      <Card.Body>
        <Card.Title id="commodity-title">{item.title}</Card.Title>
        <Card.Text id="commodity-price">${item.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommodifyItem
