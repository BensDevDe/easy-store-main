import React from 'react'


const PersonalDetails = ({ newUser, setNewUser }) => {
  return (
    <div>
      <div className='form-group'>
        <label htmlFor='firstName'></label>
        <input
          type='text'
          className='form-control'
          id='firstName'
          placeholder='First Name'
          value={newUser.firstName}
          onChange={(e) =>
            setNewUser({ ...newUser, firstName: e.target.value })
          }
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='lastName'></label>
        <input
          type='text'
          className='form-control'
          id='firstName'
          placeholder='Last Name'
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='address'></label>
        <input
          type='text'
          className='form-control'
          id='address'
          placeholder='Street'
          value={newUser.street}
          onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}
          required
        />
      </div>
      <div className='form-group  d-flex '>
        <div>
          <label htmlFor='city'></label>
          <input
            type='text'
            className='form-control'
            id='city'
            placeholder='City'
            value={newUser.city}
            onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor='zip'></label>
          <input
            type='text'
            className='form-control'
            id='zip'
            placeholder='ZIP'
            value={newUser.postcode}
            onChange={(e) =>
              setNewUser({ ...newUser, postcode: e.target.value })
            }
            required
          />
        </div>
      </div>
      <div className='form-group'>
        <label htmlFor='country'></label>
        <input
          type='text'
          className='form-control'
          id='country'
          placeholder='Country'
          value={newUser.country}
          onChange={(e) => setNewUser({ ...newUser, country: e.target.value })}
          required
        />
      </div>
    </div>
  )
}

export default PersonalDetails
