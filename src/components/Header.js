import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Menu from '../hook/Menu'
import ShoppingCart from '../hook/ShoppingCart'
import storageApi from '../utils/storageApi'
import axiosApi from '../utils/axiosApi'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shoppingData: [],
    }
    this.handleGenerateUUID = this.handleGenerateUUID.bind(this)
    this.handleGetShoppingData = this.handleGetShoppingData.bind(this)
  }

  async handleGenerateUUID() {
    let resData = await axiosApi.generateUUID()
    return resData
  }

  async handleGetShoppingData(formData) {
    let resData = await axiosApi.getShoppingData(formData)
    return resData
  }

  componentDidMount() {
    if (storageApi.getStorage('uuid') === null) {
      // 去後台生成 UUID
      let resData = this.handleGenerateUUID()
      resData.then((data) => {
        storageApi.setStorage('uuid', data)
      })
    } else {
      // 去後台取對應的 UUID 資料
      let uuid = storageApi.getStorage('uuid')
      let formData = new FormData()
      formData.append('uuid', uuid)

      let resData = this.handleGetShoppingData(formData)
      resData.then((data) => {
        this.setState({ shoppingData: data })
      })
    }
  }

  render() {
    return (
      <header className='pt-3'>
        <Container fluid='md'>
          <Row>
            <Col md='7' xs='12' className='text-md-left text-center'>
              <h1>CHENG 的服飾商店</h1>
            </Col>
            <Col className='text-md-right text-center'>
              <ShoppingCart shoppingAll={this.state.shoppingData} />
            </Col>
          </Row>
          <Menu />
          <hr />
        </Container>
      </header>
    )
  }
}
