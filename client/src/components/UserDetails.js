import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import PasswordStrengthBar from 'react-password-strength-bar'

const UserDetails = ({
  newUser,
  setNewUser,
  messageEmail,
  messagePasswordConfirm,
  messagePasswordLength,
  messageEmpty,
}) => {
  function onChange(value) {
    console.log(
      'Captcha value: 6LcmkSIfAAAAAEotZRNjzvE5G69gRt4LgwLbx8qV',
      value
    )
  }
  return (
    <div>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'></label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Enter email*'
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
        <div className='error-message'>{messageEmail}</div>
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'></label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          placeholder='Password*'
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
          required
        />
        <i className='bi bi-eye-slash' id='togglePassword'></i>
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'></label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          placeholder='Confirm Password*'
          onChange={(e) =>
            setNewUser({ ...newUser, confirmPassword: e.target.value })
          }
          required
        />
        <i className='bi bi-eye-slash' id='togglePassword'></i>
      </div>
      <PasswordStrengthBar password={newUser.password} />
      <div className='error-message'>{messagePasswordConfirm}</div>
      <div className='error-message'>{messagePasswordLength}</div>
      <div className='error-message'>{messageEmpty}</div>

      <div className='mt-3'>
        <p>* required fields</p>
        <ReCAPTCHA
          sitekey='6LcmkSIfAAAAABhq8ru8bodo7FYOempZQE1Cs7Q1'
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default UserDetails
