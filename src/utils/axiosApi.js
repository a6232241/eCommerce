import axios from 'axios'
import backEndUrl from '../utils/url'

const userRequest = axios.create({
  withCredentials: true,
  baseURL: backEndUrl,
  headers: { 'content-type': 'multipart/form-data' },
})

const resSuccess = (res) => {
  console.log(`${res.data.message}`)
  return res.data.data
}

const resError = (err) => {
  console.log(err.data)
}

export default {
  // 取得商品列表
  async getCommodityList() {
    let resData = await userRequest
      .get('/getCommodityList')
      .then(resSuccess)
      .catch(resError)
    return resData
  },
  // 取得商品細節
  async getCommodityItem(data) {
    let resData = await userRequest
      .post('/getCommodityItem', data)
      .then(resSuccess)
      .catch(resError)
    return resData
  },
  // 生成使用者的 UUID
  async generateUUID() {
    let resData = await userRequest
      .get('/generateUUID')
      .then(resSuccess)
      .catch(resError)
    return resData
  },
  // 取得 UUID 中的購物車資料
  async getShoppingData(data) {
    let resData = await userRequest
      .post('/getShoppingData', data)
      .then(resSuccess)
      .catch(resError)
    return resData
  },
  // 將新增的指定商品加入對應的 UUID
  async addShoppingData(data) {
    let resData = await userRequest
      .post('/addShoppingData', data)
      .then(resSuccess)
      .catch(resError)
    return resData
  },
  // 進行結帳
  async getPaymentAction(data) {
    let resData = await userRequest
      .post('/paymentaction', data)
      .then(resSuccess)
      .catch(resError)
    return resData
  },
}
