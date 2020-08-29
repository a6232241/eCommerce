import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommodityItem from '../hook/CommodityItem'

class CommodityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { aid: '1', img: '#', title: '1', price: '10' },
        { aid: '2', img: '#', title: '2', price: '20' }
      ],
    }
    this.renderList = this.renderList.bind(this)
  }

  renderList() {
    let items = this.state.list.map((item, index) => {
      return (
        <Col md='4' xs='12' key={index}>
          <CommodityItem item={item} />
        </Col>
      )
    })
    return items
  }

  render() {
    
    return (
      <main>
        <Container fluid='md'>
          <Row>
            {this.renderList()}
          </Row>
        </Container>
      </main>
    )
  }
}

export default CommodityList
