import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import validator from 'validator';


const UserDetails = ({ newUser, setNewUser }) => {
    function onChange(value) {
        console.log("Captcha value: 6LcmkSIfAAAAAEotZRNjzvE5G69gRt4LgwLbx8qV", value);
      }
     
  return (
    <div >
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'></label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Enter email'
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        
       
        />
        <small id='emailHelp' className='form-text text-muted'>
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'></label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          placeholder='Password'
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
          placeholder='Confirm Password'
          required
        />
        <i className='bi bi-eye-slash' id='togglePassword'></i>
      </div>

    
      <div className="mt-3"> <ReCAPTCHA
    sitekey="6LcmkSIfAAAAABhq8ru8bodo7FYOempZQE1Cs7Q1"
    onChange={onChange}
  /></div>


    </div>
  )
}

export default UserDetails
