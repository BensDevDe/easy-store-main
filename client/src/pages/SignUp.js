import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import validator from 'validator'

import { useDispatch } from 'react-redux'
import { register } from '../redux/actions/auth'

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
    confirmPassword: '',
  })

  const [messageEmail, setMessageEmail] = useState('')
  const [messagePasswordConfirm, setMessagePasswordConfirm] = useState('')
  const [messagePasswordLength, setMessagePasswordLength] = useState('')
  const [messageEmpty, setMessageEmpty] = useState('')
  const [messageEmpty1, setMessageEmpty1] = useState('')

  const [page, setPage] = useState(1)

  const emailValidation = () => {
    return validator.isEmail(newUser.email)
  }
  const emptyValidation = () => {
    return validator.isEmpty(
      newUser.email || newUser.password || newUser.confirmPassword
    )
  }

  const emptyValidation1 = () => {
    return validator.isEmpty(
      newUser.firstName ||
        newUser.lastName ||
        newUser.street ||
        newUser.city ||
        newUser.postcode ||
        newUser.country
    )
  }
  const passwordConfirm = () => {
    const passConf = newUser.password !== newUser.confirmPassword ? false : true
    return passConf
  }
  const passwordLengthValidation = () => {
    const lengthPass = newUser.password.length <= 7 ? false : true
    return lengthPass
  }

  const nextPage = (e) => {
    e.preventDefault()

    if (page === 1) {
      setMessageEmail('')
      setMessagePasswordConfirm('')
      setMessagePasswordLength('')
      setMessageEmpty('')

      const emailVal = emailValidation()
      const passConfirm = passwordConfirm()
      const passLength = passwordLengthValidation()
      const fieldEmpty = emptyValidation()

      console.log('messagePasswordConfirm', messagePasswordConfirm)
      console.log('passConfirm', passConfirm)
      console.log('length', passLength)

      if (!emailVal) {
        setMessageEmail('Email is not valid')
      } else if (passConfirm === false) {
        setMessagePasswordConfirm('Password do not match')
      } else if (!passLength) {
        setMessagePasswordLength('Password must have at least 8 characters')
      }
      // else if (!fieldEmpty) {
      //   setMessageEmpty('* fields are required')
      // }
      else {
        const nextPage = page + 1
        setPage(nextPage)
      }
    } else if (page === 2) {
      setMessageEmpty('')
      // const fieldEmpty1 = emptyValidation1()
      // if (!fieldEmpty1) {
      //   setMessageEmpty1('* fields are required')
      // } else {
      const nextPage = page + 1
      setPage(nextPage)
      // }
    } else {
    }
  }

  const previousPage = (e) => {
    e.preventDefault()
    const previousPage = page - 1
    setPage(previousPage)
  }

  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(register(newUser))

    setPage(page + 1)
  }

  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  return (
    <div className=' signup-container'>
      <div>
        <img src={process.env.PUBLIC_URL + '/Easy_Store_(4).png'} alt='logo' />
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
                page === 2 ? 'progress-range-1 range-2' : ''
              } ${page === 3 ? 'progress-range-1 range-3' : ''} ${
                page === 4 ? 'progress-range-1 range-4' : ''
              }`}
            ></div>
          </div>

          <form onSubmit={handleSubmit}>
            {page === 1 ? (
              <UserDetails
                newUser={newUser}
                setNewUser={setNewUser}
                messageEmail={messageEmail}
                messagePasswordConfirm={messagePasswordConfirm}
                messagePasswordLength={messagePasswordLength}
                messageEmpty={messageEmpty}
                messageEmpty1={messageEmpty1}
                nextPage={nextPage}
              />
            ) : page === 2 ? (
              <PersonalDetails
                previousPage={previousPage}
                nextPage={nextPage}
                newUser={newUser}
                setNewUser={setNewUser}
                messageEmpty={messageEmpty}
              />
            ) : page === 3 ? (
              <Confirmation
                previousPage={previousPage}
                nextPage={nextPage}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            ) : page === 4 ? (
              <Success newUser={newUser} />
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
                <div className='d-flex page-switch'>
                  <button
                    type='submit'
                    onClick={navigateHome}
                    className=' button-animated go-home'
                  >
                    HOME
                  </button>
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
