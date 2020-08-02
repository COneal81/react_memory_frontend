import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
// thunk allows us to call dispatch from within action
import userReducer from './reducers/userReducer'
import categoryReducer from './reducers/categoryReducer'


const reducer = combineReducers({
    userReducer,
    categoryReducer
  })
  
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

  export default store