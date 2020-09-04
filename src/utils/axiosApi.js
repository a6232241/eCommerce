import axios from 'axios'

const userRequest = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:8081',
  headers: { 'content-type': 'multipart/form-data' },
})

const resError = (err) => {
  console.log(err.data)
}

export default {
  // 取得商品列表
  async getCommodityList() {
    let resData = await userRequest
      .get('/getCommodityList')
      .then((res) => {
        console.log(`取得商品列表 ${res.data.message}`)
        return res.data.data
      })
      .catch(resError)
    return resData
  },
  // 取得商品細節
  async getCommodityItem(data) {
    let resData = await userRequest
      .post('/getCommodityItem', data)
      .then((res) => {
        console.log(`取得商品資訊 ${res.data.message}`)
        return res.data.data
      })
      .catch(resError)
    return resData
  },
  // 生成使用者的 UUID
  async generateUUID() {
    let resData = await userRequest
      .get('/generateUUID')
      .then((res) => {
        console.log(`${res.data.message}`)
        return res.data.data
      })
      .catch(resError)
    return resData
  },
  // 取得 UUID 中的購物車資料
  async getUUIDdata(data) {
    let resData = await userRequest
      .post('/getUUIDdata', data)
      .then((res) => {
        console.log(`${res.data.message}`)
        return res.data.data
      })
      .catch(resError)
    return resData
  },
  // 將新增的指定商品加入對應的 UUID
  async addUUIDdata(data) {
    let resData = await userRequest
      .post('/addUUIDdata', data)
      .then((res) => {
        console.log(`${res.data.message}`)
        return res.data.data
      })
      .catch(resError)
    return resData
  },
}
