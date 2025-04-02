import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './pages/auth/Signup'
import Signin from './pages/auth/Signin'
import Home from './pages/Home'


function App() {
   

  return (
   <div className='w-screen h-screen bg-[#f7f7ff] '>
          <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/signup' element={<Signup/>} />
               <Route path='/signin' element={<Signin/>} />
          </Routes>
   </div>
  )
}

export default App
