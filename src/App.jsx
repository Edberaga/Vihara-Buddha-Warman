import './App.css'
import { useState } from 'react'

//Import Packages
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

//Import Pages
import Home from './pages/home'
import News from './pages/news'
import Post from './component/post'
import AdminLogin from './pages/admin/AdminLogin'
import Dashboard from './pages/admin/dashboard'
import CreatePost from './pages/admin/createPost'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        
        <Route path='/post' element={<Post/>} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>
    </Router>
  )
}

export default App
