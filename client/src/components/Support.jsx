import React from 'react'
import styled from 'styled-components'
import {mobileM} from "../responsive"
import {tablet} from "../responsive"

const Container = styled.div`
display:flex;
overflow:hidden;
${mobileM({ flexDirection:"column", marginBottom:"30px 50px"})}
`

const Left = styled.div`
flex:1;
padding:100px;
${mobileM({ padding:"30px 90px"})}
${tablet({ padding:"40px"})}
`

const Image = styled.img`
width:100%;
object-fit:cover;
text-align:center;
border-radius:8%;
opacity:0.7;

`
///////////////////////////////////
const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
${tablet({ paddingRight:"50px"})}

`

const Title = styled.h1`
font-size:40px;
font-weight:400;
${mobileM({ fontSize:"28px"})}
${tablet({ fontSize:"22px"})}
`

const Desc = styled.h3`
font-size:28px;
font-weight:300;
width:60%;
text-align:center;
${mobileM({ fontSize:"20px", fontWeight:"400"})}
${tablet({ fontSize:"16px", width:"100%"})}
`
///////////////////////////////////

const Support = () => {
  return (
    <Container>
    <Left>
    <Image src = {process.env.PUBLIC_URL+"/images/business-g4b6133a27_resized.jpg"}></Image>
    </Left>
    <Right>
    <Title>Let us help you!</Title>
    <Desc>Our proffesional developers team will love to help you get your dreams into your website! contact our support & we will do the rest!</Desc>
    </Right>
    </Container>
  )
}

export default Support