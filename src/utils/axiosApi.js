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
  async getCommodity(data) {
    let resData = await userRequest
      .post('/video', data)
      .then((res) => {
        console.log(`取得影片 ${res.data.message}`)
        return res.data.data[0]
      })
      .catch(resError)
    return resData
  },
}
