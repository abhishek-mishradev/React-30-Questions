import React from 'react'

import { BrowserRouter, Routes,Route, Link } from'react-router-dom'
import Home from './forRouter/Home';
import About from './forRouter/About';
import Contact from './forRouter/Contact';

const Ten = () => {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path= "/about" element= {<About/>}/>
            <Route path= "/contact" element= {<Contact/>}/>
        </Routes>

        </BrowserRouter>

    </div>
  )
}

export default Ten