import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import "../App.css"

const Container = styled.div`
  display: flex;
  border-bottom: 0.5px solid #736f6f;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LeftWrapper = styled.div`
  padding-left: 150px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const H1 = styled.h1`
  font-size: 40px;
`

const H2 = styled.h2`
  color: #736767;
  font-size: 38px;
`

//animation
const Title = styled.div`
  height: 50px;
  overflow: hidden;
  padding-bottom: 20px;
`

const TitleItem = styled.div`
  height: 50px;
  font-size: 32px;
  font-weight: bold;
  color: #a47ca6;
  display: flex;
  align-items: center;
`

const TitleWrapper = styled.div``

const Desc = styled.div`
  font-size: 28px;
  padding-top: 20px;
`

const Button = styled.button`
  color: #a47ca6;
  border: #a47ca6 solid 2px;
  border-radius: 8px;
  margin: 10px 0px;
  padding: 5px;
  display: inline-block;
  width: 30%;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`
/////////////////////////////////////////

const Right = styled.div`
  flex: 1;
`

const RightWrapper = styled.div``
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <H1>The platform that makes your life easier</H1>
          <H2>
            Start selling online with Easy Store, A real friendly user
            experience
          </H2>
          <Title>
            <TitleWrapper className='title-wrapper'>
              <TitleItem>Responsive Design</TitleItem>
              <TitleItem>24/7 Support</TitleItem>
              <TitleItem>Different Designs Selection</TitleItem>
              <TitleItem>User Friendly</TitleItem>
              <TitleItem>Easy to use!</TitleItem>
            </TitleWrapper>
          </Title>
          <Desc>Start your 14 free trial now</Desc>
          <Button>
            {' '}
            <Link className="register-link" to='/signup'>Register </Link>{' '}
          </Button>
        </LeftWrapper>
      </Left>
      <Right>
        <RightWrapper>
          <Image
            src={
              process.env.PUBLIC_URL +
              '/images/img_2_computer_woman_removed_bg.png'
            }
          ></Image>
        </RightWrapper>
      </Right>
    </Container>
  )
}

export default Intro
