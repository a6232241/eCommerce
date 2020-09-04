import React, { useState, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import CommodityContainer from '../components/CommodityContainer'
import axiosApi from '../utils/axiosApi'

const CommodityPage = (props) => {
  const paramsUrl = props.match.params

  let [container, setContainer] = useState('')

  const handleContainer = async () => {
    let formData = new FormData()
    formData.append('style', paramsUrl.style)
    formData.append('aid', paramsUrl.aid)

    let resData = await axiosApi.getCommodityItem(formData)
    return resData
  }

  useEffect(() => {
    let resData = handleContainer()
    resData.then((data) => {
      setContainer(data[0])
    })
  }, [paramsUrl])

  return (
    <div>
      <CommodityContainer aid={paramsUrl.aid} container={container} />
      {renderRoutes(props.route.children)}
    </div>
  )
}

export default CommodityPage
