import {useParams} from "react-router-dom"
import Templates from '../pages/Templates'
import Profile from '../pages/Profile'
import NavbarEdit from '../pages/NavbarEdit'
import FooterEdit from '../pages/FooterEdit'
import { Container } from 'react-bootstrap'

const MainDashboardContent = () => {
  const params = useParams()

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container className='mx-3 mt-3'>
      <h2 className="ms-5 mt-3">{params.id.length !== 0 ? capitalizeFirstLetter(params.id) : 'Home'}</h2>
      {
        (params.id === 'templates') ? (
        <Templates/>
        ) : params.id === 'profile' ? (
          <Profile/>
          ) : params.id === 'navbarEdit' ? (
            <NavbarEdit/>
            ) : params.id === 'footerEdit' ? (
              <FooterEdit/>
        ) : (
          <div  className="ms-5 mt-5">
            <h1>Welcome</h1>
            <h4>This is your Admin Dashboard Page</h4>
            <p className="mt-5">This is the section where you take the first steps to create your own Online Shop.</p>
            <p>After you select the perfect template for you, choose your brand colors and all functionalities needed for your business, our team will be ready to launch your brand online.</p>
            <p>In your new website you will have controll of all your products, orders and users, which it will give you more freedom to manage your business without the need of a third party intervetion.</p>
            <p>But of course you can always count with our support once you are your own Admin to your own Page. If you change your mind concerning components we provided, designs or trouble shouting of all kinds, please do not hesitate to contact us through our Support Page or via e-mail. We will make our best to check and answer all your question with 24 hours.</p>

          </div>
          
        )
        
      }
    </Container>
  )
}

export default MainDashboardContent