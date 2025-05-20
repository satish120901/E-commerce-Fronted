import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Register from './Header/Register'
import Login from './Header/Login'
import Contact from './Header/Contact'
import About from './Header/About'
import Home from './Header/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Dashboard from './dashboard/Dashboard'
import Update from './Modules/User/Update'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        {/* <h2>Header</h2>    */}
        <BrowserRouter>

        <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard/*' element={<Dashboard/>}></Route>
        <Route path='/update/:userId' element={<Update />} />


      </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
