const initialState = {
  data: []
}

// reducer的函数签名: reducer(previousState, action)
export default function details(state=initialState, action) {
  switch (action.type) {
    case 'SET_DETAILS':
      return {
        data: action.data
      }
    default: 
      return state
  }
}