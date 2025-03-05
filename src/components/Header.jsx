import React, { useContext } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenauthcontext } from '../contexts/ContextsApi'

function Header() {
  const {settokenauth}=useContext(tokenauthcontext)
const navgate=useNavigate()
const handlelogout=()=>{
  sessionStorage.clear()
  navgate('/')
  settokenauth(false)
}
  return (
    <>
     <Navbar expand="lg" className="bg-danger">
      <Container >
        <Navbar.Brand >     <Link to={'/'} className='text-white text-decoration-none fw-bold'>
         <i class="fa-brands fa-foursquare fa-flip-horizontal fs-2"></i>&nbsp;
         Project Fair
         
         </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
           <button onClick={handlelogout} className='btn btn-warning ms-auto'>Log out</button>
       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header
