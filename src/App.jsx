import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import Footer from './components/Footer'
import Workshop from './components/one-time-use/Workshop'

export default function App() {
  return (
    <div>
        <Header/>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/view' element={<Workshop/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/events' element={<Events/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
    </div>
  )
}
