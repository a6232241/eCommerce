import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommodityItem from '../hook/CommodityItem'

class CommodityList extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   list: [],
    // }
    // this.renderList = this.renderList.bind(this)
  }

  // commponentDidUpdate(prevProps, prevState, snapshot) {
  //   if(this.props.list.length() !== 0) {
  //     console.log(this.props)
  //   }
  // }

  // componentDidMount() {
  //   console.log(this.props)
  //   this.setState({ list: this.props.list })
  // }

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
