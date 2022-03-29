import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { loginAction } from '../redux/actions/auth'

const SignIn = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(loginAction(newUser))
  }

  const [isShowLogin, setIsShowLogin] = useState(false);



  return (
    // <div className={`${isShowLogin ? "wrapper active" : "wrapper show"}`}>
    <div className="wrapper">
      <div className="logo">
        {" "}
        <img
          src={process.env.PUBLIC_URL + '/favicon.png'}
          alt=""
        />{" "}
      </div>
      <div className="text-center mt-4 name"> EASY STORE </div>
      <form className="p-3 mt-3" onSubmit={handleSubmit}>
        <div className="form-field d-flex align-items-center">
          {" "}
          <span className="far fa-user"></span>{" "}
          <input
            type="email"
            name="userName"
            id="userName"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) =>
              setNewUser({ ...newUser, email: e.target.value })
            }
          />{" "}
        </div>
        <div className="form-field d-flex align-items-center">
          {" "}
          <span className="fas fa-key"></span>{" "}
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />{" "}
        </div>{" "}
        <button className="btn mt-3" type="submit" value="Sign In">
          {" "}
          Login{" "}
        </button>
      </form>
      <div className="text-center fs-6 " >
        <p className="signUp-info">Don't have any account, please <span> <Link to="/signup">SIGN UP </Link>{" "}</span></p>
        {" "}
       
      </div>
    </div>
  // </div>
   
  )
}

export default SignIn




{/* <div>
<form onSubmit={handleSubmit}>
  <div class='row mb-3'>
    <label for='inputEmail3' class='col-sm-2 col-form-label'>
      Email
    </label>
    <div class='col-sm-10'>
      <input
        type='email'
        class='form-control'
        id='inputEmail3'
        value={newUser.email}
        onChange={(e) =>
          setNewUser({ ...newUser, email: e.target.value })
        }
      />
    </div>
  </div>
  <div class='row mb-3'>
    <label for='inputPassword3' class='col-sm-2 col-form-label'>
      Password
    </label>
    <div class='col-sm-10'>
      <input
        type='password'
        class='form-control'
        id='inputPassword3'
        value={newUser.password}
        onChange={(e) =>
          setNewUser({ ...newUser, password: e.target.value })
        }
      />
    </div>
  </div>

  <button type='submit' class='btn btn-primary'>
    Sign in
  </button>
</form>
</div> */}
