import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { BsPerson, BsEnvelope } from 'react-icons/bs'

class Footer extends Component {
  render() {
    return (
      <footer className='bg-dark text-light p-5'>
        <Container>
          <Row>
            <Col>
              <h5 className='border-bottom border-white'>關於我們</h5>
              <p>衣服、褲襪、飾品</p>
            </Col>
            <Col>
              <h5 className='border-bottom border-white'>聯絡我們</h5>
              <p>
                <BsPerson />
                <span className="align-middle"> cheng</span>
              </p>
              <p>
                <BsEnvelope />
                <span className="align-middle"> blf2556@gmail.com</span>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer
