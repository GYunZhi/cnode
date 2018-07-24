const initialState = {
  data:{
    avatar_url:"",
    create_at:"",
    loginname:"",
    score:"",
    recent_replies:[],
    recent_topics:[]
  },
  loading: true
}

// reducer的函数签名: reducer(previousState, action)
export default function getUser(state=initialState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        data: action.data,
        loading: false
      }
    default: 
      return state
  }
}