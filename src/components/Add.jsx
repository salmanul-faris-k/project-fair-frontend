import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadimage from '../assets/rb_996.png'
import { toast } from 'react-toastify';
import { addproject } from '../service/Allapi';
import { addresponseContext } from '../contexts/ContextsApi';
function Add() {
const {setaddresponse}=useContext(addresponseContext)


  const [show, setShow] = useState(false);
  const [preview, setpreview] = useState("")
  const [projectinformation, setprojectinformation] = useState({ title: "", Languages: "", github: "", website: "", overview: "", projectimg: "" })
  console.log(projectinformation);
  const [imgfilestatus, setimgfilestatus] = useState(false)
  const handleClose = () => {
    setprojectinformation({ title: "", Languages: "", github: "", website: "", overview: "", projectimg: "" })
    setShow(false);
  }
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (projectinformation.projectimg.type == "image/jpg" || projectinformation.projectimg.type == "image/png" || projectinformation.projectimg.type == "image/jpeg") {
      setimgfilestatus(true)
      setpreview(URL.createObjectURL(projectinformation.projectimg))
    }
    else {
      setimgfilestatus(false)
      setprojectinformation({ ...projectinformation, projectimg: "" })
      setpreview(uploadimage)
    }
  }, [projectinformation.projectimg])
  const handleupload=async()=>{
    const { title, Languages, github, website, overview, projectimg}=projectinformation
    if(title&&Languages&&github&&website&&overview&&projectimg){
const reqbody=new FormData()
reqbody.append("title",title)
reqbody.append("Languages",Languages)
reqbody.append("github",github)
reqbody.append("website",website)
reqbody.append("overview",overview)
reqbody.append("projectimg",projectimg)
const token=sessionStorage.getItem("token")
console.log("ftyyt",token);

if(token){
const reqHeader ={
  "content-Type":"multipart/form-data",
  "authorization":`Bearer ${token}`

}  
try {
 const result= await addproject(reqbody,reqHeader)
 console.log(result);
 if(result.status==200){
  toast.success("project added sucessfully ... ")
  setaddresponse(result)
  handleClose()

 }
 else{
  toast.error(" project already added")
  
 }
 
} catch (error) {
  console.log(error);
  
}

}
    }
    else{
      toast.error("enter the form completely")
    }
  }


  return (
    <>
      <button onClick={handleShow} className='btn btn-warning fw-bolder '>+New project</button>
      <Modal size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-warning fw-bolder'>New projectDetail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center ">
            <div className="col-lg-4">
              <label>
                <img className='w-100' src={preview} alt="" />
                <input onChange={(e) => setprojectinformation({ ...projectinformation, projectimg: e.target.files[0] })} className='d-none' type="file" />

              </label>
              {!imgfilestatus &&
                <p className=' text-center text-warning'>*upload the file only (jpg,png,jpeg)</p>}
            </div>
            <div className="col-lg-8">
              <input onChange={(e) => setprojectinformation({ ...projectinformation, title: e.target.value })} type="text" placeholder='Project title' className='w-75  bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
              <input onChange={(e) => setprojectinformation({ ...projectinformation, Languages: e.target.value })} type="text" placeholder='Languages used' className='w-75 bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
              <input onChange={(e) => setprojectinformation({ ...projectinformation, github: e.target.value })} type="text" placeholder='Project github link' className='w-75 bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
              <input onChange={(e) => setprojectinformation({ ...projectinformation, website: e.target.value })} type="text" placeholder='Project website link' className='w-75 bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
            </div>
            <input onChange={(e) => setprojectinformation({ ...projectinformation, overview: e.target.value })} t type="text" placeholder='Project overview' className='w-100 bg-secondary form-control border border-none rounded p-2 mt-2 shadow mb-4' />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupload} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
