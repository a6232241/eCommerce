import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class CommodityContainer extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <main>
        <Container>
          <Row>
            <Col>
              {/* <image src={'#'}></image> */}
              <h1>imageUrl</h1>
            </Col>
            <Col>
              <h1>title</h1>
              <p>price</p>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default CommodityContainer
