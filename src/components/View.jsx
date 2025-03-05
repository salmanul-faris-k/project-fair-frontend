import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteprojectapi, getuserproject } from '../service/Allapi'
import { addresponseContext, editresponseContext } from '../contexts/ContextsApi'

function View() {
const {addresponse}=useContext(addresponseContext)
const {editproject}=useContext(editresponseContext)

 const [userproject,setuserproject]=useState([])
 
 console.log(userproject);
 
 useEffect(()=>{
userprojects()

 },[addresponse,editproject])
 const userprojects=async()=>{
const token=sessionStorage.getItem('token')
  if(token){
    const reqHeader ={
      "content-Type":"multipart/form-data",
      "authorization":`Bearer ${token}`
    
    }  
    try {
      const result=await getuserproject(reqHeader)
      
      setuserproject(result.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
 }
 const handledeletproject=async(pid)=>{
  const token=sessionStorage.getItem('token')

  if(token){
    const reqHeader ={
      "content-Type":"multipart/form-data",
      "authorization":`Bearer ${token}`
    
    }  
    try {
      const result=await deleteprojectapi(pid,reqHeader)
    console.log(result);
if(result.status==200){
  userprojects()
}
    } catch (error) {
      console.log(error);
      
    }
  }
 }
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h2 className='mt-3 text-danger'>All project </h2>
        <Add/>
      </div>
      {userproject?.length>0?
      userproject?.map(pro=>(
        <div className="mt-4 p-4 border rounded d-flex justify-content-between mb-4">
        <h5>{pro?.title}</h5>
        <div className="d-flex justify-content-ccenter align-items-center">
          <Edit pro={pro}/>
          <a href={pro?.github}  target="_blank" className='ms-2'><i class="fa-brands fa-github fa-xl "></i></a>
          <button className='btn' onClick={()=>handledeletproject(pro?._id)}><i class="fa-solid fa-trash fa-lg "></i></button>
        </div>
      </div>
      ))
      :
      <div className='mb-5 text-warning fs-5'>  no project added yet</div>
}
    </>
  )
}

export default View

