import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

const CommodifyItem = (props) => {
  const [item, setItem] = useState('')

  useEffect(()=> {
      setItem(props.item)
  }, [props.item])

  return (
    <Card>
      <Card.Img variant='top' src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant='primary'>商品頁面</Button>
      </Card.Body>
    </Card>
  )
}

export default CommodifyItem
