import { combineReducers } from 'redux'
import authReducer from './auth'
import messageReducer from './message'
import themeReducer from "./theme"
export default combineReducers({
  authReducer,
  messageReducer,
  themeReducer
})
