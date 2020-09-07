import React from 'react'
import { Button } from 'react-bootstrap'
// import {withRouter} from 'react-router-dom';
import axiosApi from '../utils/axiosApi'
import storageApi from '../utils/storageApi'

const ShopCheckout = (props) => {
  const handleShopCheckout = async () => {
    let formData = new FormData()
    formData.append('uuid', storageApi.getStorage('uuid'))
    await axiosApi.getShopCheckoutPage(formData)

    // props.history.push(window.location.pathname)
  }

  return (
    <Button
      variant='outline-danger'
      className='ml-2'
      size={props.size}
      onClick={handleShopCheckout}
    >
      前往結帳
    </Button>
  )
}

export default ShopCheckout
