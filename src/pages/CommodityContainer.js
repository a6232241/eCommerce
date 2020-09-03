import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from 'react-bootstrap'
import axiosApi from '../utils/axiosApi'

class CommodityContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paramsUrl: this.props.match.params,
      container: [],
      colorVal: '',
      sizeVal: '',
    }
    this.handleCommodityContainer = this.handleCommodityContainer.bind(this)
    this.renderButton = this.renderButton.bind(this)
    this.changeColorVal = this.changeColorVal.bind(this)
    this.changeSizeVal = this.changeSizeVal.bind(this)
  }

  async handleCommodityContainer() {
    let formData = new FormData()
    formData.append('style', this.state.paramsUrl.style)
    formData.append('aid', this.state.paramsUrl.aid)

    let resData = await axiosApi.getCommodityItem(formData)
    return resData
  }

  // @params String 需要取值得變數名
  renderButton(name) {
    let data = this.state.container[name]
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

  componentDidMount() {
    let resData = this.handleCommodityContainer()
    resData.then((data) => {
      this.setState({
        paramsUrl: this.props.match.params,
        container: data[0],
      })
    })
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
                src={`http://localhost:8081${this.state.container.imgPath}`}
              ></Image>
            </Col>
            <Col className='text-right'>
              <h2>{this.state.container.title}</h2>
              <h3>NT$ {this.state.container.price}</h3>
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
              
              <Button variant='outline-danger' className='ml-2' size='lg'>
                直接購買
              </Button>
              <Button variant='outline-warning' className='ml-2' size='lg'>
                放入購物車
              </Button>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <h2>詳細資訊</h2>
        </Container>
      </main>
    )
  }
}

export default CommodityContainer
