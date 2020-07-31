import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/manageUsers'
import currentUser from './reducers/currentUser'

const reducer = combineReducers({
    usersReducer,
    currentUser
  })
  
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

  export default store