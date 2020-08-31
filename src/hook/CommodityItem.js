import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import '../assets/scss/hook/commodityItem.scss'

const CommodifyItem = (props) => {
  const [item, setItem] = useState('')
  
  useEffect(() => {
    setItem(props.item)
  }, [props.item])

  return (
    <Link
      to={{ pathname: `/apparel/${item.style}/${item.aid}`}}
      style={{ textDecoration: 'none', color: '#000' }}
    >
      <Card className='text-center my-3' id='commodity-container'>
        <Card.Img variant='top' src={item.img} />
        <Card.Body>
          <Card.Title id='commodity-title'>{item.title}</Card.Title>
          <Card.Text id='commodity-price'>${item.price}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CommodifyItem
