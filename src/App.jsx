import { useState } from 'react'
import './assets/App.css'
import { Link,Routes, Route } from 'react-router-dom'
import Landing from "./Landing.jsx"
import Header from "./Header.jsx"
import Dashboard from "./Dashboard.jsx"
import Footer from "../src/Footer.jsx"
import Taskbar from './Taskbar.jsx'
import ReactDOM from 'react-dom/client'




function App() {
    return(<>
    <div>
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/task' element={<Taskbar/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/taskbar' element={<Taskbar/>}/>
        </Routes>
    </div>
    </>)
}



export default App
