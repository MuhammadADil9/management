import { useState } from 'react'
import './assets/App.css'
import { Link,Routes, Route } from 'react-router-dom'
import Landing from "./Landing.jsx"
import Dashboard from "./Dashboard.jsx"
import Taskbar from './Taskbar.jsx'
import ReactDOM from 'react-dom/client'
import Activities from './Activities.jsx'
import NoRoute from './NoRoute.jsx'
import Signup from './Signup.jsx'

function App() {
    return(<>
    <div>


        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='signup' element={<Signup/>}  />
            <Route path="taskbar" element={<Taskbar/>}/>
            <Route path='activities' element={<Activities/>} />
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='*' element={<NoRoute/>}/>
        </Routes>



    </div>
    </>)
}



export default App
