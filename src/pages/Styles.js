import React, { useState, useEffect } from 'react'
import CommodityList from '../components/CommodityList'
import axiosApi from '../utils/axiosApi'

const Styles = (props) => {
  const paramsUrl = props.match.params

  let [commodityList, setCommodityList] = useState('')

  useEffect(() => {
    const handleCommodityList = async () => {
      let formData = new FormData()
      formData.append('style', paramsUrl.style)

      let resData = await axiosApi.getCommodityItem(formData)
      return resData
    }

    let resData = handleCommodityList()
    resData.then((data) => {
      setCommodityList(data)
    })
  }, [paramsUrl])

  return (
    <div>
      <CommodityList style={paramsUrl.style} list={commodityList} />
      {/* {renderRoutes(props.route.children)} */}
    </div>
  )
}

export default Styles
