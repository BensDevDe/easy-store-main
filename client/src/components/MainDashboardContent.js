import {useParams, useNavigate } from "react-router-dom"
import Templates from '../pages/Templates'
import Profile from '../pages/Profile'


const MainDashboardContent = () => {
  const params = useParams()
  const navigate = useNavigate()

  const onBackClick = e => {
    e.preventDefault()
    navigate(-1);
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className=''>
      <h2>{params.id.length !== 0 ? capitalizeFirstLetter(params.id) : 'Home'}</h2>
      {
        (params.id === 'templates') ? (
        <Templates/>
        ) : params.id === 'profile' ? (
          <Profile/>
        ) : (
          <h1>Welcome</h1>
        )
        
      }
      <a href="/" onClick={onBackClick}>
        Back
      </a>
    </div>
  )
}

export default MainDashboardContent