import './sass/App.css'
import SignUp from './pages/SignUp'
import Welcome from './pages/Welcome'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import Footer from './components/Footer'
import AdminPage from './pages/AdminPage.js'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/confirm/:confirmationCode' element={<Welcome />} />
        <Route path='/admin' element={<AdminPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
