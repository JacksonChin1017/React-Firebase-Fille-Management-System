import {Route, Routes} from 'react-router-dom'

import './App.css'
import {Login} from './pages/AuthPages/Login/Login'
import {Register} from './pages/AuthPages/Register/Register'
import { HomePage } from './pages/HomePage/HomePage'

const App = () => {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
  )
}

export default App
