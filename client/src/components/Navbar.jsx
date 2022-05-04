import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import SignIn from './SignIn'
import { logout } from '../redux/actions/auth'
import Toggle from '../components/Toggle'
import { Link, useNavigate } from 'react-router-dom'
import { mobileS } from '../responsive'
import { mobileM } from '../responsive'
import { tablet } from '../responsive'

const Container = styled.div`
  height: 100px;
  width: 100%;
  ${mobileM({ height: '100px' })}
`

//parent for left center right
const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileM({ padding: '10px 0px' })}
`
//letf nav bar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobileM({ display: 'none' })}
`
const Language = styled.span`
  padding-left: 150px;
  font-size: 14px;
  cursor: pointer;
  display: none;
  ${tablet({ display: 'none' })}
`
const SearchContainer = styled.div`
  border: 0.5px solid #252525;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${tablet({ marginLeft: '5px' })}
`
const Input = styled.input`
  border: none;
  background: none;
  ${mobileM({ width: '60px' })}
  ${tablet({ width: '80px' })}
`
//center/logo nav bar
const Center = styled.div`
  flex: 1;
  text-align: center;
  ${mobileM({
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '10px;',
  })}
  ${tablet({ display: 'flex', justifyContent: 'flex-start' })}
`
const LogoDiv = styled.img`
  height: 100px;
  object-fit: cover;
  ${mobileM({ width: '90px', height: '80px', justifyContent: 'flex-start' })}
  ${tablet({ width: '140px', height: '100px', justifyContent: 'flex-start' })}
`

//right nav bar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobileM({ flex: '1' })}
`

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 30px;
  ${mobileM({ fontSize: '17px', marginLeft: '10px', marginTop: '10px' })}
  ${mobileS({
    fontSize: '15px',
    marginLeft: '10px',
    marginTop: '10px',
    marginRight: '10px;',
  })}
  ${tablet({ fontSize: '16px', marginTop: '10px' })}
`

const AvatarImg = styled.img`
  width: 50px;
  height: 50px;

  padding: 1px;
  margin-right: 10px;
  object-fit: cover;
  border: 1px solid #a47ca6;
  border-radius: 100%;

  @media only screen and (max-width: 60em) {
    display: none;
    width: 20px;
  height: 20px;

  padding: 1px;
  margin-right: 10px;
  object-fit: cover;
  border: 1px solid #a47ca6;
  border-radius: 100%;
    
     
    }
`
const Navbar = () => {
  const [isShowLogin, setIsShowLogin] = useState(false)
  const navigate = useNavigate()

  const showLogin = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userData = JSON.parse( localStorage.getItem('user' ) );

  console.log(user)

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <SignIn isShowLogin={isShowLogin} showLogin={showLogin} />
      <Wrapper>
        <Left>
          <Language>DE</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to={'/'}>
            <LogoDiv
              src={process.env.PUBLIC_URL + '/images/Easy_Store_logo.png'}
            ></LogoDiv>
          </Link>
        </Center>
        <Right>
          {userInfo ? (
            <MenuItem onClick={() => navigate('/dashboard/home')}>

              {userData  ? (<AvatarImg
                src={process.env.PUBLIC_URL + `/uploads/${user.avatar}`}
              />) : ((<AvatarImg
                src={process.env.PUBLIC_URL + `/uploads/${userInfo.avatar}`}
              />))}
              
              {userInfo.firstName}
              {/* {userInfo.lastName} */}
            </MenuItem>
          ) : (
            <MenuItem onClick={() => navigate('/signup')}>Free Trial</MenuItem>
          )}

          {userInfo ? (
            <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={() => showLogin()}>Login</MenuItem>
          )}

          <MenuItem>Prices</MenuItem>
          <Toggle />
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
