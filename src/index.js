import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './all.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from "react-router-dom";


import Seperate from './components/Seperate'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<App/>}/>
     <Route path='/:productid' element={<Seperate/>}/>
     </Routes>
     </BrowserRouter>
    
)