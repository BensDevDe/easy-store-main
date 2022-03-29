//Authentication Service

import axios from 'axios'
const API_URL = 'http://localhost:5001/user/'



export const verifyUser = async (code) => {
  return axios.get(`${API_URL}register/confirm/${code}`).then((response) => {
    return response.data
  })
}





















































































//  export const registerUser = async (newUser) => {
//   try {
//     const response = await axios.post(API_URL + 'register', newUser, {
//       withCredentials: true,
//     })
//     return response.data
//   } catch (err) {
//     console.log(err.message)
//   }
// }

// export const loginUser = async (newUser) => {
//   try {
//     const response = await axios.post(API_URL + 'login', newUser, {
//       withCredentials: true,
//     })

//     if (response.data.accessToken) {
//       localStorage.setItem('user', JSON.stringify(response.data))
//     }
//   } catch (err) {
//     console.log(err.msg)
//   }
// }

// export const logoutUser = () => {
//   localStorage.removeItem('user')
// }

// export const verifyUser = (code) => {
//   return axios.get(`${API_URL}register/confirm/${code}`).then((response) => {
//     return response.data
//   })
// }
