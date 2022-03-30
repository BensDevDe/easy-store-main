import {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/types'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = user
  ? { isLoggedIn: true, user, loading: false }
  : { isLoggedIn: false, loading: true, user: null }

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case REGISTER_START:
      return state
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      }
    case VERIFY_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      }
    case VERIFY_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      }
    case LOGIN_START:
      return state
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      }
    default:
      return state
  }
}

export default authReducer
