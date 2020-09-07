import React from 'react'
import { Button } from 'react-bootstrap'
import {withRouter} from 'react-router-dom';
import axiosApi from '../utils/axiosApi'
import storageApi from '../utils/storageApi'

const AddToShopping = (props) => {
  const handleSetUUIDdata = async () => {
    if(props.shopping.colorVal.length === 0 || props.shopping.sizeVal.length === 0){
      alert('請選擇尺寸或顏色')
    }else {
      let formData = new FormData()
      formData.append('uuid', storageApi.getStorage('uuid'))
      formData.append('shopping', JSON.stringify(props.shopping))
      await axiosApi.addUUIDdata(formData)
      alert('加入購物車')
      
      props.history.push(window.location.pathname)
    }
  }

  return (
    <Button
      variant='outline-warning'
      className='ml-2'
      size='lg'
      onClick={handleSetUUIDdata}
    >
      放入購物車
    </Button>
  )
}

export default withRouter(AddToShopping)
