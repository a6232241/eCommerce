import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
import routes from './routes'
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main className="pb-4">{renderRoutes(routes)}</main>
        <Footer />
      </div>
    )
  }
}

export default App
