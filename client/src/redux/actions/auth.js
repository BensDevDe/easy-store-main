import axios from 'axios'
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from './types'

const API_URL = 'http://localhost:5001/user/'

export const login = (user) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }
    const { data } = await axios.post(API_URL + 'login', user, config)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  localStorage.removeItem('user')
  try {
    await axios.get(API_URL + 'logout', { withCredentials: true })

    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })

    document.location.href = '/'
  } catch (err) {
    console.log(err)
  }
}

export const register = (newUser) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(API_URL + 'register', newUser, config)

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    })

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const getUserDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5001/user/profile/${id}`,
      {
        withCredentials: true,
      }
    )
    dispatch({
      type: USER_DETAILS_REQUEST,
    })
    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    })
  }
}
export const updateUserProfile = (id, user) => async (dispatch) => {
  try {
    const data = await axios.put(API_URL + `profile/update/${id}`, user)

    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    })
  }
}

export const uploadProfileAvatar = (id, user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    }

    // console.log(user)

    const data = await axios.put(
      API_URL + `profile/uploadAvatar/${id}`,
      user,
      config
    )

    dispatch({
      type: USER_DETAILS_REQUEST,
    })

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    })
    localStorage.setItem('user', JSON.stringify(data))
  } catch (error) {
    console.log(error)
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    })
  }
}
