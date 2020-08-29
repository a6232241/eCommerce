import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'

class App extends Component{
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className='App'>
        <Header />
        {renderRoutes(routes)}
      </div>
    )
  }
}

export default App
