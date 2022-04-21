import {useParams} from "react-router-dom"
import Templates from '../pages/Templates'
import Profile from '../pages/Profile'
import { Container } from 'react-bootstrap'

const MainDashboardContent = () => {
  const params = useParams()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container className='mx-3 mt-3'>
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
    </Container>
  )
}

export default MainDashboardContent