import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { themeAction } from '../redux/actions/themeAction'

const Container = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #736f6f;
  background-color: #a47ca6;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Image = styled.img`
  width: 15px;
  height: 15px;
`

const Btn = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #252525;
  position: absolute;
  cursor: pointer;
`

const Toggle = () => {
  const { darkMode } = useSelector((state) => state.themeReducer)

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(themeAction())
  }
  return (
    <Container>
      <Image
        src={process.env.PUBLIC_URL + '/images/moon-removebg-preview.png'}
      ></Image>
      <Image
        src={process.env.PUBLIC_URL + '/images/warm-98532_1280.png'}
      ></Image>
      <Btn onClick={handleClick} style={{ left: darkMode ? 0 : 25 }}></Btn>
    </Container>
  )
}

export default Toggle
