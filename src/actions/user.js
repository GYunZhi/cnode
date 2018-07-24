import * as TYPES from './types'
import http from '../http'

export function getUser(userName) {
  return (dispatch) => {
    // 在这里可以进行异步操作，如去后台获取数据等
    http.get(`/user/${userName}`).then(resp => {
      dispatch({ type: TYPES.SET_USER, data: resp.data.data })
    }).catch(error => {
      console.error(error.response)
    })
  }
}
