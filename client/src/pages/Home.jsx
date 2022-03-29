
import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import Intro from '../components/Intro'
import ThemeList from '../components/ThemeList'
import Responsive from '../components/Responsive'
import Analytics from '../components/Analytics'
import Support from '../components/Support'
import Contact from '../components/Contact'
import { Toggle } from '../components/Toggle'
import { ThemeContext } from '../components/context'
import Footer from '../components/Footer'

export const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='Home' style={{ backgroundColor:darkMode ? "#222" : "#E8E8E8", color:darkMode && "#DCDCDC"}}>
        <Navbar/>
        <Announcment/>
        <Toggle/>
        <Intro/>
        <ThemeList/>
        <Responsive/>
        <Analytics/>
        <Support/>
        <Contact/>
        <Footer/>
    </div>
  )
}
