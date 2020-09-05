import React, { useState, useEffect } from 'react'
import CommodityList from '../components/CommodityList'
// import Footer from '../components/Footer'
import axiosApi from '../utils/axiosApi'

const Index = () => {
  let [commodityList, setCommodityList] = useState('')

  const handleCommodityList = async () => {
    let resData = await axiosApi.getCommodityList()
    return resData
  }

  useEffect(() => {
    let resData = handleCommodityList()
    resData.then(data => {
      setCommodityList(data)
    })
  }, [])

  return (
    <div>
      <CommodityList list={commodityList} />
    </div>
  )
}

export default Index
