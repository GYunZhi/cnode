
const initialState = {
  data: []
}

// reducer的函数签名: reducer(previousState, action)
export default function list(state=initialState, action) {
  switch (action.type) {
    case 'SET_LIST':
      return {
        data: action.data
      }
    default: 
      return state
  }
}