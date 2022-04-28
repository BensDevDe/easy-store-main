import { combineReducers } from 'redux'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
} from './auth'
import themeReducer from './theme'
export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  themeReducer,
})
