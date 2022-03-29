import React from 'react'
import styled from 'styled-components'
import "../App.css"

const Container = styled.div`
overflow:hidden;
width:30%;
height:40vh;
margin:20px 10px;
border:2px solid rgb(243,242,242);
border-radius:8px;
`

const Browser = styled.div`
height:20px;
background-color:#252525;
display:flex;
align-items:center;
position:sticky;
z-index:2;
`
const Circle = styled.div`
width:6px;
height:6px;
border-radius:50%;
background-color:rgb(243,242,242);
margin:3px;
`
const Image = styled.img`
width:100%;
`
const Themes = ({img,link}) => {
  return (
    <Container>
      <Browser>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      </Browser>
      <a href={link} target= "_blank" rel="noreferrer">
      <Image src = {img} className='theme-animation'></Image>
      </a>
    </Container>
  )
}

export default Themes