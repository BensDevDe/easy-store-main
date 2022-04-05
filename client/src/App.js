import './sass/App.css'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Impressum from './pages/Impressum'
import Agb from './pages/Agb'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Faq from './pages/Faq'

function App() {
  const { darkMode } = useSelector((state) => state.themeReducer)
  return (
    
    <div className='Container' style={{
    backgroundColor: darkMode? '#222' : '#E8E8E8',
    color: darkMode && '#DCDCDC',
  }}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/confirm/:confirmationCode' element={<Welcome />} />
        <Route path='/impressum' element={<Impressum/>} />
        <Route path='/agb' element={<Agb/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/faq' element={<Faq/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
