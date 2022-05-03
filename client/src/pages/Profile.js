import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserDetails,
  updateUserProfile,
  uploadProfileAvatar,
} from '../redux/actions/auth'
import { useNavigate, Link } from 'react-router-dom'
import PasswordStrengthBar from 'react-password-strength-bar'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [editEnabled, setEditEnabled] = useState(true)
  const [editEnabled1, setEditEnabled1] = useState(true)
  const [editEnabled2, setEditEnabled2] = useState(true)

  const enableEdit = () => {
    setEditEnabled((editEnabled) => !editEnabled)
    setEditEnabled1(true)
    setEditEnabled2(true)
  }
  const enableEdit1 = () => {
    setEditEnabled1((editEnabled1) => !editEnabled1)
    setEditEnabled(true)
    setEditEnabled2(true)
  }
  const enableEdit2 = () => {
    setEditEnabled2((editEnabled2) => !editEnabled2)
    setEditEnabled1(true)
    setEditEnabled(true)
  }
  const [changedData, setChangedData] = useState(false)

  const [message, setMessage] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const [userUpdate, setUserUpdate] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
  }, [userInfo, changedData])

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
  }, [user, userInfo, changedData])

  const submitHandler = (e) => {
    e.preventDefault()
    if (userUpdate.password !== userUpdate.confirmPassword) {
      setMessage(true)
    } else {
      dispatch(updateUserProfile(userInfo._id, userUpdate))
      setChangedData(true)
    }
  }

  const submitHandlerAvatar = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('file', userUpdate.avatar)
    dispatch(uploadProfileAvatar(userInfo._id, formData))
    setChangedData(true)
  }
  const backToProfile = (e) => {
    setChangedData(false)
    enableEdit()
  }
  return (
    <div className='profile-container'>
      {changedData ? (
        <div>
          <p>Your data was changed successfully</p>
          <Link
            className='register-link'
            to='/dashboard/profile'
            onClick={() => backToProfile()}
          >
            Back to your Profile{' '}
          </Link>{' '}
        </div>
      ) : (
        <div className='profile-container'>
          <div className='profile-container-1'>
            {' '}
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
                      setUserUpdate({
                        ...userUpdate,
                        firstName: e.target.value,
                      })
                    }
                    disabled={editEnabled ? 'disabled' : ''}
                    required
                  />
                </div>
                <div>
                  <label>Last Name: </label>
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
                    // required
                  />
                </div>
                <PasswordStrengthBar password={userUpdate.password} />
                <div>
                  <label style={{ display: 'flex' }}>
                    Confirm Password:{' '}
                    <span>
                      {message ? <p>Password do not match</p> : <p></p>}
                    </span>
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='password-confirm'
                    placeholder='xxxxxxxx'
                    disabled={editEnabled ? 'disabled' : ''}
                    // required
                  />
                </div>
                <div className='button-container'>
                  <button type='submit'>Save</button>
                </div>
              </form>
            </div>
            <div className='profile-box'>
              <div className='profile-head'>
                <h5>Personal Details</h5>
                <button onClick={() => enableEdit1()}>Edit</button>
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
                    disabled={editEnabled1 ? 'disabled' : ''}
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
                    disabled={editEnabled1 ? 'disabled' : ''}
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
                    disabled={editEnabled1 ? 'disabled' : ''}
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
                    disabled={editEnabled1 ? 'disabled' : ''}
                    required
                  />
                </div>

                <div className='button-container'>
                  <button type='submit'>Save</button>
                </div>
              </form>
            </div>
          </div>
          <div className='profile-container-2'>
            <div className='profile-box'>
              <div className='profile-head'>
                <h5>Profil Image</h5>
                <button onClick={() => enableEdit2()}>Edit</button>
              </div>
              <div>
                <h6>
                  {user.firstName} {user.lastName}
                </h6>
                <img
                  src={process.env.PUBLIC_URL + `/uploads/${user.avatar}` || ''}
                  alt='Profil Picture'
                />{' '}
              </div>
              <form className='form-group-sm'>
                <div>
                  <input
                    name='file'
                    type='file'
                    className='form-control'
                    id='file'
                    disabled={editEnabled2 ? 'disabled' : ''}
                    onChange={(e) =>
                      setUserUpdate({
                        ...userUpdate,
                        avatar: e.target.files[0],
                      })
                    }
                  />
                </div>
                <div className='button-container'>
                  <button onClick={submitHandlerAvatar}>Save</button>
                </div>
              </form>
            </div>{' '}
            <div className='profile-box'>
              <div className='profile-head'>
                {' '}
                <h5> Your Plans</h5>
              </div>
            </div>{' '}
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
