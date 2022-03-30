import {
  EmailOutlined,
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  overflow: hidden;
  
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.img`
  width: 120px;
  height: 100px;
`

const Desc = styled.p`
  margin: 20px 0px;
  width: 80%;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`

const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 80%;
  height: 40%;
  object-fit: cover;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo
          src={process.env.PUBLIC_URL + '/images/Easy_Store_logo.png'}
        ></Logo>
        <Desc>
          We help people achive independance by making it easier to start, run &
          grow a business. We belive the future is in E-commerce, this platform
          is perfect for no coding expirince. We are here for that.
        </Desc>
        <SocialContainer>
          <SocialIcon style={{ backgroundColor: '#a47ca6' }}>
            <Facebook />
          </SocialIcon>
          <SocialIcon style={{ backgroundColor: '#a47ca6' }}>
            <Instagram />
          </SocialIcon>
          <SocialIcon style={{ backgroundColor: '#a47ca6' }}>
            <Twitter />
          </SocialIcon>
          <SocialIcon style={{ backgroundColor: '#a47ca6' }}>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Impressum</ListItem>
          <ListItem>AGB</ListItem>
          <ListItem>Privecy Policy</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>Help Center</ListItem>
          <ListItem>FAQ</ListItem>
          <ListItem>24/7 Support</ListItem>
          <ListItem>About Us</ListItem>
          {/* <Link to='/'style={{color:'black'}}>
              </Link> */}
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {' '}
          <Room style={{ marginRight: '10px' }} />
          Berlin | Germany
        </ContactItem>
        <ContactItem>
          {' '}
          <Phone style={{ marginRight: '10px' }} />
          +49 0301235678
        </ContactItem>
        <ContactItem>
          {' '}
          <EmailOutlined style={{ marginRight: '10px' }} />
          easy-store@gmail.com
        </ContactItem>
        <Payment src='./images/payment_icons_react.png' />
      </Right>
    </Container>
  )
}

export default Footer
