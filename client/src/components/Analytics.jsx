import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
overflow:hidden;
`

const Right = styled.div`
flex:1;
padding:0px 100px;
`

const Image = styled.img`
width:100%;
object-fit:cover;
text-align:center;
border-radius:8%;
opacity:0.7;
`
///////////////////////////////////
const Left = styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const Title = styled.h1`
font-size:40px;
font-weight:400;
`

const Desc = styled.h3`
font-size:28px;
font-weight:300;
width:60%;
text-align:center;
`

const Analytics = () => {
  return (
    <Container>
    <Left>
    <Title>Managment tools</Title>
    <Desc>Easy analytics tool to manage your orders, statistics, finances and marketing. Get insights about your shop & grow your business</Desc>
    </Left>
    <Right>
    <Image src = {process.env.PUBLIC_URL+"/images/analytics.png"}></Image>
    </Right>
    </Container>
  )
}

export default Analytics






