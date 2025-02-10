
import AboutUs from './AboutUs/AboutUs'
import './App.css'
import Categories from './Categories/Categories'
import Home from './Home/Home'
import Login from './Login/Login'
import Register from './Register/Register'
import Services from './Services/Services'
import PoliticasTerminos1 from './Politicas/Politicas.jsx' 

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import {useState, useEffect} from 'react';
import { authFirebase } from './firebase'


function App() {
  const [user, setUser] = useState("")

  useEffect(() => {
    
    authFirebase.onAuthStateChanged((user)=>{
      setUser(user)
      })
    
  }, [])

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/login' element = {user ? <Navigate to= "/services"/>:<Login/>}/>
            <Route path='/register' element = {user ? <Navigate to = "/services"/>:<Register/>}/>
            <Route path='/categories' element = {<Categories/>}/>
            <Route path='/services' element = {user ? <Services user={user.email}/> : <Navigate to = "/login"/>}/>
            <Route path='/us' element = {<AboutUs/>}/>
            <Route path='/politicsterms' element = {<PoliticasTerminos1/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
