import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Profile from '../components/Profile'
import View from '../components/View'

function Dashboard() {
  const [username,setusername]=useState("")
  useEffect(()=>{
if(sessionStorage.getItem("user")){
  setusername(JSON.parse(sessionStorage.getItem("user")).username)
}
else{
  setusername("")
}
  },[])
  return (
    <>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8">
            <h1>welcome <span  className='text-warning '>{username}</span></h1>
            <View/>
          </div>
          
          <div className="col-lg-4">
            <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
