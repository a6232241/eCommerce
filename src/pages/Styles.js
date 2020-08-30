import React from 'react'
// import { renderRoutes } from 'react-router-config'
import CommodityList from '../components/CommodityList'

const Styles = (props) => {
  return (
    <div>
      <CommodityList style={props.match.params.style} />
      {/* {renderRoutes(props.route.children)} */}
    </div>
  )
}

export default Styles
