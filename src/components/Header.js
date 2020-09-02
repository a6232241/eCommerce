import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Menu from '../hook/Menu'

class Header extends Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <header>
        <Container fluid='md'>
          <Row>
            <Col md='7' xs='12' className='text-md-left text-center'>
              <h1>CHENG 的服飾商店</h1>
            </Col>
            <Col></Col>
          </Row>
          <Menu />
          <hr />
        </Container>
      </header>
    )
  }
}

export default Header
