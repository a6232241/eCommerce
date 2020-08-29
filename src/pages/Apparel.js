import React from 'react'
import { renderRoutes } from 'react-router-config'

const Apparel = (props) => {
  return (
    <div>
      {renderRoutes(props.route.children)}
    </div>
  )
}

export default Apparel
