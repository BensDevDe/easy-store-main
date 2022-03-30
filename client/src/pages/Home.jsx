import React from 'react'
import Announcment from '../components/Announcment'
import Intro from '../components/Intro'
import ThemeList from '../components/ThemeList'
import Responsive from '../components/Responsive'
import Analytics from '../components/Analytics'
import Support from '../components/Support'
import Contact from '../components/Contact'
import Newsletter from '../components/Newsletter'
import Toggle from '../components/Toggle'

import { useSelector } from 'react-redux'
// import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

const Home = () => {
  const { darkMode } = useSelector((state) => state.themeReducer)

  return (
    <div
      className='Home'
      style={{
        backgroundColor: darkMode ? '#222' : '#E8E8E8',
        color: darkMode && '#DCDCDC',
      }}
    >
      <Announcment />
      <Toggle />
      <Intro />
      <ThemeList />
      <Responsive />
      <Analytics />
      <Support />
      <Newsletter />
      <Contact />
      {/* <ScrollUpButton style={{backgroundColor:"#a47ca6"}}/> */}
    </div>
  )
}

export default Home
