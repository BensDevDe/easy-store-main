import './sass/App.css'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard.js'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Impressum from './pages/Impressum'
import Agb from './pages/Agb'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Faq from './pages/Faq'
import { CircleArrow as ScrollUpButton } from 'react-scroll-up-button'
import CookieConsent from 'react-cookie-consent'

function App() {
  const { darkMode } = useSelector((state) => state.themeReducer)
  return (
    <div
      className='Container'
      style={{
        backgroundColor: darkMode ? '#222' : '#E8E8E8',
        color: darkMode && '#DCDCDC',
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/confirm/:confirmationCode' element={<Welcome />} />
          <Route path='/impressum' element={<Impressum />} />
          <Route path='/agb' element={<Agb />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/faq' element={<Faq />} />

          <Route path='/dashboard/:id' element={<Dashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <CookieConsent
        style={{
          background: '#222',
          opacity: '0.9',
          color: '#fff',
          textAlign: 'center',
          fontSize: '18px',
        }}
        buttonStyle={{
          backgroundColor: '#A47CA6',
          color: '#fff',
          fontSize: '16px',
          fontWeight: '500',
          borderRadius: '8px',
        }}
        buttonText='Ok Great!'
        expires={150}
      >
        We use cookies on this site to enhance your user experience. For a
        complete overview of all cookies used, please see our{' '}
        <a href='/privacy'>Cookie policy.</a>
      </CookieConsent>
      <ScrollUpButton style={{ backgroundColor: '#a47ca6' }} />
    </div>
  )
}

export default App
