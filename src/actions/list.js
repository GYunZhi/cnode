import * as TYPES from './types'

export function getTopicList(data) {
  return (dispatch) => {
    // 在这里可以进行异步操作，如去后台获取数据等
    dispatch({ type: TYPES.SET_LIST, data })
  }
}
