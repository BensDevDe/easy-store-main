import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginAction } from '../redux/actions/auth'

const SignIn = ({ isShowLogin, showLogin }) => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    postcode: '',
    country: '',
    password: '',
  })
  const dispatch = useDispatch()
  const  { isLoggedIn } = useSelector((state) => state.authReducer)
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginAction(newUser))
  }

  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [navigate, isLoggedIn])

  return (
    <div className={`${isShowLogin ? 'wrapper active' : 'wrapper show'}`}>
      <div className='wrapper'>
        <div className='logo'>
          {' '}
          <img src={process.env.PUBLIC_URL + '/favicon.png'} alt='' />{' '}
        </div>
        <div className='text-center mt-4 name'> EASY STORE </div>
        <form className='p-3 mt-3' onSubmit={handleSubmit}>
          <div className='form-field d-flex align-items-center'>
            {' '}
            <span className='far fa-user'></span>{' '}
            <input
              type='email'
              name='userName'
              id='userName'
              placeholder='Email'
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />{' '}
          </div>
          <div className='form-field d-flex align-items-center'>
            {' '}
            <span className='fas fa-key'></span>{' '}
            <input
              type='password'
              name='password'
              id='pwd'
              placeholder='Password'
              value={newUser.password}
              onChange={(e) =>
                setNewUser({ ...newUser, password: e.target.value })
              }
            />{' '}
          </div>{' '}
          <button
            onClick={() => showLogin()}
            className='btn mt-3'
            type='submit'
            value='Sign In'
          >
            {' '}
            Login{' '}
          </button>
        </form>
        <div className='text-center fs-6 '>
          <p className='signUp-info'>
            New to Easy-Store?{' '}
            <span>
              {' '}
              <Link to='/signup'>Create an account </Link>{' '}
            </span>
          </p>{' '}
        </div>
      </div>
    </div>
  )
}

export default SignIn
