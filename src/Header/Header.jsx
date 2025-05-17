import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    
  return (
    <div className='bg-dark p-2 d-flex justify-content-around'>        
        <Link className='btn btn-light' to='/'>HOME</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/about'>ABOUT</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/contact'>CONTACT</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/login'>LOGIN</Link> &nbsp;&nbsp;
        <Link className='btn btn-light'to='/register'>Register</Link> &nbsp;&nbsp;
    </div>
  )
}

export default Header