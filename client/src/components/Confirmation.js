import React from 'react'

const Confirmation = ({ newUser }) => {
  return (
    <div>
      <div className='confirmation-box'>
        <div className='confirmation-text  '>
          <div>
            <h6>Name: </h6>
            <p>
              {' '}
              {newUser.firstName} {newUser.lastName}
            </p>{' '}
          </div>
        </div>
        <div className='confirmation-text'>
          <h6>Email:</h6>
          <p>{newUser.email}</p>
        </div>
        <div className='confirmation-text'>
          <h6>Street: </h6>
          <p>{newUser.street}</p>
        </div>
        <div className='confirmation-text'>
          <h6>City: </h6>
          <p>
            {' '}
            {newUser.postcode} {newUser.city}
          </p>
        </div>
        <div className='confirmation-text'>
          <h6>Country:</h6>
          <p>{newUser.country}</p>
        </div>
      </div>

      <div className='custom-control custom-switch mt-3'>
        <input
          type='checkbox'
          className='custom-control-input me-3'
          id='customSwitch1'
        />
        <label className='custom-control-label' htmlFor='customSwitch1'>
          I agree to the terms and conditions of Easy- Store
        </label>
      </div>
    </div>
  )
}

export default Confirmation
