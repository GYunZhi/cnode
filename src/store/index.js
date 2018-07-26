import {applyMiddleware, createStore, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from '../reducers'

// 自定义logger中间件
const logger = store => next => action => {
  console.log('dispatching', action)
  next(action)
  console.log('next state', store.getState())
}

const middlewares = [
  thunk,
  logger
]

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

// 在这里可以处理reducer的持久化
const reducer = combineReducers(reducers)

//createStore函数签名 createStore(reducer, [preloadedState], enhancer)
// enhancer, 是一个组合 store creator 的高阶函数，返回一个,新的强化过的 store creator
export const store = createStore(
  reducer,
  undefined,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)