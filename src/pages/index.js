import React, { useState, useEffect } from 'react'
import CommodityList from '../components/CommodityList'
// import Footer from '../components/Footer'
import axiosApi from '../utils/axiosApi'

const Index = (props) => {
  let [commodityList, setCommodityList] = useState('')

  useEffect(() => {
    setCommodityList(axiosApi.getCommodityList())
  })

  return (
    <div>
      <CommodityList list={commodityList} />
    </div>
  )
}

export default Index
