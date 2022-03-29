import React from 'react'

const Success = ({ newUser }) => {
  return (
    <div>
      <div>Success </div>

      <div className='success '>
        <p>
          Thank you <span>{newUser.firstName}</span> for signing up with
          Easy-Store. We sent you an email. Please click on the link to verify
          your email!{' '}
        </p>
      </div>
    </div>
  )
}

export default Success
