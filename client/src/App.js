import './sass/App.css'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'


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
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
