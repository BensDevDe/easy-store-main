import React from 'react'
import styled from 'styled-components'
import { Search } from "@material-ui/icons"


const Container = styled.div`
height: 100px;
width:100%;
  
`

//parent for left center right
const Wrapper = styled.div`
width:100%;
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
justify-content: space-between;
`
//letf nav bar
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.span`
padding-left:150px;
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border: 0.5px solid #252525;
border-radius:5px;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`
const Input = styled.input`
border:none;
background-color:#E8E8E8;
`
//center/logo nav bar
const Center = styled.div`
flex:1;
text-align: center;
`
const LogoDiv = styled.img`
   height:100px;
    object-fit:cover;
`

//right nav bar
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content: center;
`

const MenuItem = styled.div`
font-size:20px;
cursor:pointer;
margin-left:30px;
`
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <Language>DE</Language>
            <SearchContainer>
                <Input/> 
                <Search style={{color:"gray", fontSize:"16px"}}/>
            </SearchContainer>
            </Left>
            <Center>
            <LogoDiv src = {process.env.PUBLIC_URL+"/images/Easy_Store_logo.png"}></LogoDiv>
            </Center>
            <Right>
                <MenuItem>Free Trial</MenuItem>
                <MenuItem>Login</MenuItem>
                <MenuItem>Prices</MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar

