import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommodityItem from '../hook/CommodityItem'

class CommodityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        { aid: '1', img: '#', title: '1', price: '10', style: 'coat' },
        { aid: '2', img: '#', title: '2', price: '20', style: 'coat' },
        { aid: '1', img: '#', title: '1', price: '10', style: 'pants' },
        { aid: '2', img: '#', title: '2', price: '20', style: 'accessories' },
      ],
    }
    this.renderList = this.renderList.bind(this)
  }

  renderList() {
    let items = this.state.list.map((item, index) => {
      return (
        <Col md='3' xs='12' key={index}>
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
            <Col>
              <h3 className='text-right'>
                {this.props.style === undefined ? '推薦' : this.props.style}
              </h3>
            </Col>
          </Row>
          <Row>{this.renderList()}</Row>
        </Container>
      </main>
    )
  }
}

export default CommodityList
