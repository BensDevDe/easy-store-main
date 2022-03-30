import axios from 'axios'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  VERIFY_SUCCESS,
  VERIFY_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from './types'

const API_URL = 'http://localhost:5001/user/'

export const registerAction = (newUser) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await axios.post(
      API_URL + 'register',
      newUser,
      {
        withCredentials: true,
      },
      config
    )

    dispatch({
      type: REGISTER_SUCCESS,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.msg,
    })
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.msg ||
      error.toString()
    dispatch({
      type: REGISTER_FAIL,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
  }
}

export const loginAction = (newUser) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = await axios.post(
      API_URL + 'login',
      newUser,
      {
        withCredentials: true,
      },
      config
    )

    dispatch({
      type: LOGIN_SUCCESS,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.msg,
    })

    localStorage.setItem('user', JSON.stringify(response.data))
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.msg ||
      error.toString()
    dispatch({
      type: LOGIN_FAIL,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
  }
}

export const verifyAction = (code) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}register/confirm/${code}`)
    dispatch({
      type: VERIFY_SUCCESS,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: response.data.msg,
    })
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.msg ||
      error.toString()
    dispatch({
      type: VERIFY_FAIL,
    })
    dispatch({
      type: SET_MESSAGE,
      payload: message,
    })
  }
}

export const logoutAction = () => async (dispatch) => {
  await axios.get(API_URL + 'logout', { widthCredentials: true })
  localStorage.removeItem('user')
  dispatch({
    type: LOGOUT,
  })
}
