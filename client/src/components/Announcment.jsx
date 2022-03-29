import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:60px;
background-color: #A47CA6;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:22px;
font-weight:500;
`
const Announcment = () => {
  return (
    <Container>
      Make your dreams come true & start your store today!
    </Container>
  )
}

export default Announcment