import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axiosApi from '../utils/axiosApi'
import storageApi from '../utils/storageApi'

const AddToShopping = (props) => {
  const handleSetUUIDdata = async () => {
    let formData = new FormData()
    formData.append('uuid', storageApi.getStorage('uuid'))
    formData.append('shopping', JSON.stringify(props.shopping))
    await axiosApi.addUUIDdata(formData)
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

export default AddToShopping
