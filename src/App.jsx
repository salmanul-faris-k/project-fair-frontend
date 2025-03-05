
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Project from './pages/Project'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Footer from './components/Footer'
import './bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import { tokenauthcontext } from './contexts/ContextsApi'
import { useContext } from 'react'

function App() {
const {tokenauth}=useContext(tokenauthcontext)
  return (
    <>
    <ToastContainer
position="top-center"

/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login'element={<Auth/>} />
        <Route path='/register'element={<Auth insideRegister={true}/>}/>
        <Route path='/dashboard'element={tokenauth?<Dashboard/>:<Navigate to={'/login'}/>} />
        <Route path='/project'element={tokenauth?<Project/>:<Navigate to={'/login'}/>}/>
        <Route />
      </Routes>
      <Footer/>

    </>
  )
}

export default App
