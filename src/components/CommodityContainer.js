import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  InputGroup,
} from 'react-bootstrap'
import AddToShopping from '../hook/AddToShopping'

class CommodityContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colorVal: '',
      sizeVal: '',
      amount: 1,
    }

    this.renderButton = this.renderButton.bind(this)
    this.changeColorVal = this.changeColorVal.bind(this)
    this.changeSizeVal = this.changeSizeVal.bind(this)
    this.changeAmount = this.changeAmount.bind(this)
  }

  // @params String 需要取值得變數名
  renderButton(name) {
    let data = this.props.container[name]
    if (data !== undefined) {
      let array = data.split(',')
      let items = array.map((item, index) => {
        return (
          <ToggleButton
            key={index}
            value={item}
            className='ml-2 mb-3'
            variant='outline-primary'
          >
            {item}
          </ToggleButton>
        )
      })
      return items
    } else {
      return
    }
  }

  changeColorVal(data) {
    this.setState({ colorVal: data })
  }

  changeSizeVal(data) {
    this.setState({ sizeVal: data })
  }

  changeAmount(e) {
    this.setState({ amount: parseInt(e.target.value.replace(/\D/, '')) })
  }

  render() {
    return (
      <main>
        <Container>
          <Row>
            <Col
              className='d-flex'
              md='4'
              style={{ borderRight: '#ccc 1px solid' }}
            >
              <Image
                style={{ margin: 'auto' }}
                src={`https://e-commerce-plat-cms.herokuapp.com${this.props.container.imgPath}`}
              ></Image>
            </Col>
            <Col className='text-right'>
              <h2>{this.props.container.title}</h2>
              <h3>NT$ {this.props.container.price}</h3>
              <h6>顏色</h6>
              <ToggleButtonGroup
                type='radio'
                name='options'
                value={this.state.colorVal}
                onChange={this.changeColorVal}
              >
                {this.renderButton('color')}
              </ToggleButtonGroup>
              <h6>尺寸</h6>
              <ToggleButtonGroup
                type='radio'
                name='options'
                value={this.state.sizeVal}
                onChange={this.changeSizeVal}
              >
                {this.renderButton('size')}
              </ToggleButtonGroup>
              <h6>數量</h6>
              <InputGroup className='justify-content-md-end mb-3'>
                <input
                  type='number'
                  min={1}
                  max={99}
                  value={this.state.amount}
                  onChange={this.changeAmount}
                ></input>
              </InputGroup>
              <Button variant='outline-danger' className='ml-2' size='lg'>
                前往結帳
              </Button>
              <AddToShopping shopping={this.state} aid={this.props.aid} />
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <h2>詳細資訊</h2>
          <Row>
            <Image
              style={{ margin: 'auto' }}
              src={`https://e-commerce-plat-cms.herokuapp.com${this.props.container.imgPath}`}
            ></Image>
          </Row>
        </Container>
      </main>
    )
  }
}

export default CommodityContainer
