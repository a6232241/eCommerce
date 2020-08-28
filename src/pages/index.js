import React, { Component } from 'react'
import Header from '../components/Header'
import CommodityList from '../components/CommodityList'
// import Footer from '../components/Footer'

class Home extends Component {
  //   constructor(props) {
  //     super(props)
  //   }

  render() {
    return (
      <div>
        <Header />
        <CommodityList />
      </div>
    )
  }
}

export default Home
