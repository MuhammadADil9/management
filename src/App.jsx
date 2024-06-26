import { useState } from 'react'
import './assets/App.css'
import { createBrowserRouter, Router,RouterProvider,Route,Link } from 'react-router-dom'
import Landing from "./Landing.jsx"
import Header from "./Header.jsx"
import Dashboard from "./Dashboard.jsx"
import Footer from "../src/Footer.jsx"
import Taskbar from './Taskbar.jsx'

const router = createBrowserRouter([
    {path:"/",
     element:<Landing/>
    }
])


function App() {
    return(<>
    <Header/>
    <Taskbar/>
    <Dashboard/>

    </>)
}


export default App
