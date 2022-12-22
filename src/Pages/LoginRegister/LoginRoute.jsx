import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Register/Register'

const LoginRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registrar' element={<Register/>}/>
    </Routes>
  )
}

export default LoginRoute