import './CSSFile/App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import React from 'react'

export const RoutesLink = () => {
  return (
    <>
    <Routes>
        <Route path='/Home' element= {<Home />}></Route>
        <Route path='/About' element = {<About />}></Route>
        <Route path= '/Contact' element = {<Contact />}></Route>
        
    </Routes>      
    <Link to= '/Home'><button>HOME</button></Link>
    <Link to= '/Contact'><button>CONTACT</button></Link>
    <Link to= '/About'><button>ABOUT</button></Link>
    </>
  )
}


