import React from 'react'
import styled from 'styled-components'
import Themes from './Themes'
import {ThemesImg} from '../../src/data'

const Container = styled.div`
padding:50px 100px;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;
overflow:hidden;
background-color:#A47CA6;
`

const Texsts = styled.div`
width:65%;
`
const H1 = styled.h1`
font-size:50px;
font-weight:600;
color:#252525;
`

const P = styled.p`
margin:20px 0px;
font-size:26px;
color:#252525;
`

const List = styled.div`
width:100%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const ThemeList = () => {
  return (
    <Container>
      <Texsts>
          <H1>Explore our theme options, Completly free & easy to use</H1>
          <P>Create a beautifull succssesfull e-commerce website, fully backed by our developers, to make it easy for you to start selling today!</P>
      </Texsts>
     <List>
         {ThemesImg.map((item)=> (
         <Themes key={item.id} img={item.img} link={item.link}/>
         )) }
     </List>
    </Container>
  )
}

export default ThemeList