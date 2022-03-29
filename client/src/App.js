import './sass/App.css'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Welcome from './components/Welcome'
import Home from './pages/Home'

import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/confirm/:confirmationCode' element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
