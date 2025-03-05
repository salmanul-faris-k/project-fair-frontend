import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { getallproject } from '../service/Allapi'
getallproject
function Project() {
  const [allproject,setallproject]=useState([])
  const [searchproject,setsearchproject]=useState("")
  console.log(searchproject);
  
  console.log(allproject);
  useEffect(()=>{
    allprojects()
  },[searchproject])
const allprojects=async()=>{
  const token=sessionStorage.getItem('token')
  if(token){
    const reqHeader ={
      "content-Type":"multipart/form-data",
      "authorization":`Bearer ${token}`
    
    }  
    try {
      const result=await getallproject(searchproject,reqHeader)
      setallproject(result.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
}

  return (
    <>
     <div className='mb-5 container'>
      <div className=' py-3 d-flex justify-content-between'>
        <h2 className='text-warning'>ALL Projects</h2>
        <input onChange={(e)=>setsearchproject(e.target.value)} type="text" className='form-control w-25' placeholder='Search project by language' />
      </div>
      <div className="row mt-2">
        {
          allproject?.length > 0 ?
            allproject?.map(projects=>(
              <div className="col-md-4 col-lg-3 mb-3">
              <ProjectCard pro={projects} />
            </div>
            ))
            :
            <div className='my-5 fw-bolder text-warning'>Projects not found</div>

        }
      </div>
    </div>
    </>
  )
}

export default Project
