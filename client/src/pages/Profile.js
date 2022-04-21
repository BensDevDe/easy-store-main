import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../redux/actions/auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [editEnabled, setEditEnabled] = useState(true)
  const enableEdit = () => {
    setEditEnabled((editEnabled) => !editEnabled)
  }
  const [message, setMessage] = useState(null)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

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
    avatar: '',
  })

  useEffect(() => {
    if (!userInfo) {
      navigate('/')
    } else {
      dispatch(getUserDetails(userInfo._id))
    }
  }, [])

  useEffect(() => {
    setUserUpdate({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: '',
      confirmPassword: '',
      street: user.street,
      city: user.city,
      postcode: user.postcode,
      country: user.country,
      avatar: user.avatar,
    })
  }, [user])

  console.log('userUpdate', userUpdate)

  const submitHandler = (e) => {
    e.preventDefault()
    if (userUpdate.password !== userUpdate.confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(updateUserProfile({ id: user.db_user._id, userUpdate }))
    }
  }
  return (
    <div className='profile-container'>
      <div className='profile-box'>
        <div className='profile-head'>
          <h5>Login & Security</h5>
          <button onClick={() => enableEdit()}>Edit</button>
        </div>
        <form className='form-group-sm' onSubmit={submitHandler}>
          <div>
            <label>First Name:</label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              value={userUpdate.firstName || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, firstName: e.target.value })
              }
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
              value={userUpdate.lastName || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, lastName: e.target.value })
              }
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
              value={userUpdate.email || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, email: e.target.value })
              }
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
              value={userUpdate.password || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, password: e.target.value })
              }
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
              value={userUpdate.confirmPassword || ''}
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>
          <button type='submit'>Save</button>
        </form>
      </div>

      <div className='profile-box'>
        <div className='profile-head'>
          <h5>Personal Details</h5>
          <button onClick={() => enableEdit()}>Edit</button>
        </div>
        <form className='form-group-sm' onSubmit={submitHandler}>
          <div>
            <label>Street</label>
            <input
              type='text'
              className='form-control'
              id='street'
              value={userUpdate.street || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, street: e.target.value })
              }
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
              value={userUpdate.city || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, city: e.target.value })
              }
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
              value={userUpdate.postcode || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, postcode: e.target.value })
              }
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
              value={userUpdate.country || ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, country: e.target.value })
              }
              disabled={editEnabled ? 'disabled' : ''}
              required
            />
          </div>

          <button type='submit'>Save</button>
        </form>
      </div>

      <div className='profile-box'>
        <div className='profile-head'>
          <h5>Profil Image</h5>
          <button onClick={() => enableEdit()}>Edit</button>
        </div>
        <div>
          <h6>
            {user.firstName} {user.lastName}
          </h6>
          <img
            src={process.env.PUBLIC_URL + '/images/dummy-profile-pic.png'}
            alt='Profil Picture'
          />{' '}
        </div>
        <form className='form-group-sm'>
          <div>
            <label>Upload Picture</label>
            <input
              type='file'
              className='form-control'
              id='avatar'
              disabled={editEnabled ? 'disabled' : ''}
              onChange={(e) =>
                setUserUpdate({ ...userUpdate, avatar: e.target.value })
              }
            />
          </div>

          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
