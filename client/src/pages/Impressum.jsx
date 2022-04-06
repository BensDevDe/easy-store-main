import Announcment from '../components/Announcment'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
overflow:hidden;
padding:20px;
`
const H1 = styled.h1`
text-align:center;`
const P = styled.p``

const Impressum = () => {
  return (
    <>
    <Announcment/>
    <Container>
    <H1>Impressum</H1>
      <P>
      Gesetzliche Anbieterkennung:

      Easy Store
      diese vertr. d. d. Geschäftsführer Michele Naomi Antonis Ben
      14057 Berlin
      Deutschland
      Telefon: +49301234566
      E-Mail: easy-store@gmail.com
      USt-IdNr.: DE3123456
      eingetragen im Handelsregister des Amtsgerichtes Berlin
      </P>
    </Container>
    </>
  )
}

export default Impressum