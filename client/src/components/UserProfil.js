import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../redux/actions/auth'
import { useNavigate } from 'react-router-dom'

const Profil = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [userUpdate, setUserUpdate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    street: '',
    city: '',
    postcode: '',
    country: '',
  })
  const [message, setMessage] = useState(null)

  const [editEnabled, setEditEnabled] = useState(true)

  const enableEdit = () => {
    setEditEnabled((editEnabled) => !editEnabled)
  }

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    } else {
      setUserUpdate({
        firstName: userInfo.db_user.name.firstName,
        lastName: userInfo.db_user.name.lastName,
        email: userInfo.db_user.email,
        street: userInfo.db_user.address.street,
        city: userInfo.db_user.address.city,
        postcode: userInfo.db_user.address.postcode,
        country: userInfo.db_user.address.country,
        avatar: userInfo.avatar,
      })
    }
  }, [navigate, userInfo, dispatch, user])

  const submitHandler = (e) => {
    e.preventDefault()
    if (userUpdate.password !== userUpdate.confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      // dispatch(updateUserProfile({ id: user._id, name , email, password }))
    }
  }
  return (
    <div className='profil-container'>
      <div className='profil-login-container'>
        <div className='profil-head'>
          <h5>Login & Security</h5>
          <button onClick={() => enableEdit()}>Edit</button>
        </div>
        <form class='form-group-sm'>
          <div>
            <label>First Name:</label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              value={userUpdate.firstName}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              value={userUpdate.lastName}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type='email'
              className='form-control'
              id='email'
              value={userUpdate.email}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type='password'
              className='form-control'
              id='password'
              placeholder='xxxxxxxx'
              value={userUpdate.password}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type='password'
              className='form-control'
              id='password-confirm'
              placeholder='xxxxxxxx'
              value={userUpdate.confirmPassword}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <button type='submit'>Save</button>
        </form>
      </div>

      <div className='profil-login-container'>
        <div className='profil-head'>
          <h5>Personal Details</h5>
          <button onClick={() => enableEdit()}>Edit</button>
        </div>
        <form class='form-group-sm'>
          <div>
            <label>Street</label>
            <input
              type='text'
              className='form-control'
              id='street'
              value={userUpdate.street}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type='text'
              className='form-control'
              id='city'
              value={userUpdate.city}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>ZIP:</label>
            <input
              type='text'
              className='form-control'
              id='zip'
              value={userUpdate.postcode}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type='country'
              className='form-control'
              id='country'
              value={userUpdate.country}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>

          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Profil
