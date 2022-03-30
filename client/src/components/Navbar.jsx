import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import SignIn from './SignIn'
import { logoutAction } from '../redux/actions/auth'

const Container = styled.div`
  height: 100px;
  width: 100%;
`

//parent for left center right
const Wrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
//letf nav bar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  padding-left: 150px;
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid #252525;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
  background-color: #e8e8e8;
`
//center/logo nav bar
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const LogoDiv = styled.img`
  height: 100px;
  object-fit: cover;
`

//right nav bar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 30px;
`
const Navbar = () => {
  const [isShowLogin, setIsShowLogin] = useState(false)

  const showLogin = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  const dispatch = useDispatch()

  const loggedUser = useSelector((state) => state.authReducer)
  const { isLoggedIn } = loggedUser

  console.log(isLoggedIn)

  const logoutHandler = () => {
    dispatch(logoutAction())
  }

  return (
    <Container>
      <SignIn isShowLogin={isShowLogin} showLogin={showLogin} />
      <Wrapper>
        <Left>
          <Language>DE</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <LogoDiv
            src={process.env.PUBLIC_URL + '/images/Easy_Store_logo.png'}
          ></LogoDiv>
        </Center>
        <Right>
          {isLoggedIn ? (
            <MenuItem>
              {loggedUser.user.db_user.name.firstName}{' '}
              {loggedUser.user.db_user.name.lastName}
            </MenuItem>
          ) : (
            <MenuItem>Free Trial</MenuItem>
          )}

          {isLoggedIn ? (
            <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
          ) : (
            <MenuItem onClick={() => showLogin()}>Login</MenuItem>
          )}

          <MenuItem>Prices</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
