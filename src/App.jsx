import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'

const App = () => {
  return (
    <div className='text-white'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Project/>} />
      </Routes>
    </div>
  )
}

export default App