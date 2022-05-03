import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../redux/actions/auth'

const SignIn = ({ isShowLogin, showLogin }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  console.log(error);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login(user))
  }

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
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
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
              <Link to='/signup' onClick={() => showLogin()}>
                {' '}
                SignUp
              </Link>
            </span>
          </p>{' '}
        </div>
      </div>
    </div>
  )
}

export default SignIn
