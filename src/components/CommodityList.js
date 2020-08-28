import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommodityItem from '../hook/CommodityItem'

class CommodityList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [{ aid: '1', img: '#', title: '1', description: 'test' }],
    }
  }

  render() {
    return (
      <main>
        <Container fluid='md'>
          <Row>
            <Col md='4' xs='12'>
              <CommodityItem item={this.state.list[0]} />
            </Col>
            <Col md='4' xs='12'>
              <CommodityItem item={this.state.list[0]} />
            </Col>
            <Col md='4' xs='12'>
              <CommodityItem item={this.state.list[0]} />
            </Col>
            <Col md='4' xs='12'>
              <CommodityItem item={this.state.list[0]} />
            </Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default CommodityList
