import React from 'react'
import { Button } from 'react-bootstrap'
// import {withRouter} from 'react-router-dom';
// import axiosApi from '../utils/axiosApi'
import storageApi from '../utils/storageApi'
import backEndUrl from '../utils/url'

const ShopCheckout = (props) => {
  const handleShopCheckout = async () => {
    if(props.onClick) props.onClick()
    window.location.href = `${backEndUrl}/paymentaction?uuid=${storageApi.getStorage('uuid')}`
    // let formData = new FormData()
    // formData.append('uuid', storageApi.getStorage('uuid'))
    // let resData = await axiosApi.getPaymentAction(formData)
    // let parser = new DOMParser()
    // let doc = parser.parseFromString(resData, 'application/xml')
    // let docNodes = doc.childNodes[0].childNodes
    // console.log(resData)
    // props.changeDom(docNodes)
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
