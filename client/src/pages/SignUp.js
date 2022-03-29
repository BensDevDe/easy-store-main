import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { useDispatch, useSelector } from 'react-redux'
import { registerAction } from '../redux/actions/auth'

import UserDetails from '../components/UserDetails'
import PersonalDetails from '../components/PersonalDetails'
import Confirmation from '../components/Confirmation'
import Success from '../components/Success'

import { FaArrowRight } from 'react-icons/fa'

import { FaArrowLeft } from 'react-icons/fa'

const SignUp = () => {
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

  const { message } = useSelector((state) => state.messageReducer)
  const [successful, setSuccessful] = useState(false)

  const [page, setPage] = useState(1)

  const nextPage = (e) => {
    e.preventDefault()
    const nextPage = page + 1
    setPage(nextPage)
  }

  const previousPage = (e) => {
    e.preventDefault()
    const previousPage = page - 1
    setPage(previousPage)
  }

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(registerAction(newUser))
    setSuccessful(true)
    setPage(page + 1)
  }

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/home')
  }

  return (
    <div className='d-flex justify-content-around align-items-end signup-container'>
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/Easy_Store_logo.png'}
          alt='logo'
        />
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className=' signup-form d-flex flex-column justify-content-start'
        >
          <h3>Registration</h3>
          <div>
            <p>Step {page} of 4</p>
            <div
              className={` ${page === 1 ? 'progress-range-1' : ''} ${
                page === 2 ? 'progress-range-2' : ''
              } ${page === 3 ? 'progress-range-3' : ''} ${
                page === 4 ? 'progress-range-4' : ''
              }`}
            ></div>
          </div>

          <form onSubmit={handleSubmit}>
            {page === 1 ? (
              <UserDetails
                newUser={newUser}
                setNewUser={setNewUser}
                nextPage={nextPage}
              />
            ) : page === 2 ? (
              <PersonalDetails
                previousPage={previousPage}
                nextPage={nextPage}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            ) : page === 3 ? (
              <Confirmation
                previousPage={previousPage}
                nextPage={nextPage}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            ) : page === 4 ? (
              <Success
              newUser={newUser} />
            ) : null}

            <div className='d-flex justify-content-center mt-4'>
              {page === 1 ? (
                <div className='page-switch'>
                  <button
                    type='submit'
                    className='button-animated'
                    onClick={nextPage}
                  >
                    {' '}
                    Continue <FaArrowRight className='button-icon' />
                  </button>
                </div>
              ) : page === 2 ? (
                <div className='d-flex page-switch'>
                  <button
                    type='submit'
                    className='button-animated'
                    onClick={previousPage}
                  >
                    <FaArrowLeft className='button-icon' />
                    Previous
                  </button>
                  <button
                    type='submit'
                    className='button-animated'
                    onClick={nextPage}
                  >
                    {' '}
                    Continue <FaArrowRight className='button-icon' />
                  </button>
                </div>
              ) : page === 3 ? (
                <div className='d-flex justify-content-center page-switch'>
                  <button
                    type='submit'
                    className='button-animated-confirmation'
                    onClick={previousPage}
                  >
                    <FaArrowLeft className='button-icon' /> Previous
                  </button>

                  <button
                    type='submit'
                    className='button-animated-confirmation '
                  >
                    <img
                      className='signup-img'
                      src={process.env.PUBLIC_URL + '/favicon.png'}
                      alt=''
                    />
                    Sign Up
                  </button>
                </div>
              ) : page === 4 ? (
                <div className="d-flex page-switch" >
                  <button type="submit" onClick={navigateHome} className=" button-animated go-home">HOME</button>
                </div>
              ) : null}
            </div>
          </form>

          <div className='encrypted'>
            {' '}
            <p className='text-secondary'>
              Your data will be transmitted encrypted.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SignUp
