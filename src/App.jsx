import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navbar from './components/common/Navbar'
import NavLinkPage from './components/common/NavLinkPage'
import NavBarContextProvider from './components/common/NavBarContextProvider'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

const App = () => {
  return (
    <div className='text-white'>
      <NavBarContextProvider>
      <Navbar/>
      <NavLinkPage/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agence' element={<Agence/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
      </NavBarContextProvider>
    </div>
  )
}

export default App