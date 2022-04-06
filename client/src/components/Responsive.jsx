import React from 'react'
import styled from 'styled-components'
import {mobileM} from "../responsive"
import {tablet} from "../responsive"

const Container = styled.div`

display:flex;
overflow:hidden;
${mobileM({ flexDirection:"column"})}
`

const Left = styled.div`
flex:1;
padding:50px 100px;
${mobileM({ padding:"30px 70px"})}
${tablet({ padding:"10px 10px"})}

`

const Image = styled.img`
padding-top:30px;
width:100%;
object-fit:cover;
text-align:center;

`
///////////////////////////////////
const Right = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Title = styled.h1`
font-size:40px;
font-weight:400;
${mobileM({ fontSize:"28px"})}
${tablet({ fontSize:"23px"})}
`

const Desc = styled.h3`
font-size:28px;
font-weight:300;
width:60%;
text-align:center;
${mobileM({ fontSize:"20px", fontWeight:"400"})}
${tablet({ fontSize:"16px", width:"90%"})}

`

const Responsive = () => {
  return (
    <Container>
    <Left>
    <Image src = {process.env.PUBLIC_URL+"/images/responsive_design.png"}></Image>
    </Left>
    <Right>
    <Title>Responsive Design</Title>
    <Desc>One Platform to sell products to anyone & anywhere. sell through your website, social media and online marketplaces.</Desc>
    </Right>
    </Container>
  )
}

export default Responsive