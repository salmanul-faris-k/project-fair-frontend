import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import authenticationimg from '../assets/Authenticationimg.png'
import { login, register } from '../service/Allapi'
import { toast } from 'react-toastify'
import { tokenauthcontext } from '../contexts/ContextsApi';

function Auth({insideRegister}) {
  const {settokenauth}=useContext(tokenauthcontext)
  const [userdata,setuserdata]=useState({username:"",email:"",password:""})
  const [islogin,setislogin]=useState(false)
  console.log(userdata);
  const navgate=useNavigate()
  const handleregister=async(e)=>
    {
   const {username,email,password}=userdata
   if(username,email,password){
    const result=await register(userdata)
    console.log(result);
   try {
    if(result.status==200){
      navgate('/login')
      setuserdata({username:"",email:"",password:""})
    }
    else{
      if(result.status==406){
        alert(result.response.data)
        setuserdata({username:"",email:"",password:""})

      }
    }
   } catch (error) {
    console.log(error);
    
    
   }

   }
   else{
    toast.warning("please fill the form completely")
   }
  }



  const handlelogin=async(e)=>
    {
      e.preventDefault()
   const {email,password}=userdata
   if(email,password){
       try {

    const result=await login(userdata)
    console.log(result);
    if(result.status==200){
      setislogin(true)
       
      sessionStorage.setItem("user",JSON.stringify(result.data.user))
      sessionStorage.setItem("token",result.data.token)
      settokenauth(true)

      setTimeout(() => {
 
      setuserdata({email:"",password:""})
      navgate('/')

      setislogin(false)

      }, 2000);

    }
    else{
      if(result.status==404){
        toast.error(result.response.data)
        setuserdata({email:"",password:""})

      }
    }
   } catch (error) {
    console.log(error);
    
    
   }

   }
   else{
    toast.warning("please fill the form completely")
   }
  }
  return (
    <div>
     <div className='d-flex justify-content-center '>
    <div className="row mt-5 container bg-secondary my-5 ">
      <div className="col-lg-6 align-content-center d-flex justify-content-center ">
        <img  src={authenticationimg} alt="" />
      </div>
      <div className="col-lg-6 mt-5">
          <h3 className=''>Project Fair </h3>
          { insideRegister &&
          <p>Sign Up to your account</p>
          }
          <div>
            { insideRegister &&
          <input value={userdata.username} onChange={(e)=>setuserdata({...userdata,username:e.target.value})}  type="text"   placeholder='User Name' className='w-75 bg-secondary border border-none rounded p-2  shadow mt-3'/>
            }
          <input value={userdata.email} onChange={(e)=>setuserdata({...userdata,email:e.target.value})} type="email"  placeholder='E-mail' className='w-75 bg-secondary border border-none rounded p-2 mt-3 shadow'/>
          <input value={userdata.password} onChange={(e)=>setuserdata({...userdata,password:e.target.value})} type="password"  placeholder='Password' className='w-75 bg-secondary border border-none rounded p-2 mt-3 shadow mb-4'/>
          </div>
          <div>
          
          { insideRegister?
          <div>
            <button onClick={handleregister}  className='btn btn-warning w-50 mb-3'>Sign Up </button>
          <p>Don&#39;t have an account yet? <Link to={'/login'}>Login</Link></p>
          </div>
          :
          <div>
            <button onClick={handlelogin}  className='btn btn-warning w-50 mb-3'>Sign In  {islogin&&
              <Spinner animation="border" variant="primary" />}</button>
          
          <p>Don&#39;t have an account yet? <Link to={'/register'}>Register</Link></p>
          </div>

          }
          </div>
        
      </div>
    </div>
    </div>
    </div>
  )
}

export default Auth
