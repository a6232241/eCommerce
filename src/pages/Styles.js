import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header'

const Styles = (props) => {
  return (
    <div>
      {renderRoutes(props.route.children)}
    </div>
  )
}

export default Styles
