import React, { Component } from 'react'
import '../assets/scss/hook/numberSpinner.scss'

class NumberSpinner extends Component {
  state = {
    value: 0,
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 })
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div className='def-number-input number-input'>
        <button onClick={this.decrease} className='minus'></button>
        <input
          className='quantity'
          name='quantity'
          value={this.state.value}
          onChange={() => console.log('change')}
          type='number'
        />
        <button onClick={this.increase} className='plus'></button>
      </div>
    )
  }
}

export default NumberSpinner
