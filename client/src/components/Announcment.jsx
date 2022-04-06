import React from 'react'
import styled from 'styled-components'
import {mobileM} from "../responsive"
import {mobileS} from "../responsive"
import {tablet} from "../responsive"

const Container = styled.div`
height:60px;
background-color: #A47CA6;
display:flex;
align-items:center;
justify-content:center;
font-size:22px;
font-weight:500;
${mobileM({textAlign:"center",fontSize:"19px" })}
${mobileS({textAlign:"center",fontSize:"16px" })}
${tablet({textAlign:"center",fontSize:"20px" })}
`
const Announcment = () => {
  return (
    <Container>
      Make your dreams come true & start your store today!
    </Container>
  )
}

export default Announcment