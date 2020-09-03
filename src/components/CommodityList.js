import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommodityItem from '../hook/CommodityItem'

class CommodityList extends Component {

  renderList() {
    if (this.props.list.length !== 0) {
      let items = this.props.list.map((item, index) => {
        return (
          <Col md='3' xs='12' key={index}>
            <CommodityItem item={item} />
          </Col>
        )
      })
      return items
    } else {
      return
    }
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
