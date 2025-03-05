import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import serverurl from '../service/serviceurl';
import { toast } from 'react-toastify';
import { updateprojectapi } from '../service/Allapi';
import { editresponseContext } from '../contexts/ContextsApi';
function Edit({ pro }) {
  const {seteditproject}=useContext(editresponseContext)
  const [projectinformation, setprojectinformation] = useState({ id: pro?._id, title: pro?.title, Languages: pro?.Languages, github: pro?.github, website: pro?.website, overview: pro?.overview, projectimg: "" })
  console.log(projectinformation);
  
  const [imgfilestatus, setimgfilestatus] = useState(false)

  const [preview, setpreview] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setprojectinformation({id:pro?._id, title: pro?.title, Languages: pro?.Languages, github: pro?.github, website: pro?.website, overview: pro?.overview, projectimg: "" })
    setShow(false);
  }
  const handleShow = () => {
    setprojectinformation({id:pro?._id, title: pro?.title, Languages: pro?.Languages, github: pro?.github, website: pro?.website, overview: pro?.overview, projectimg: "" })

    setShow(true);
  }
  useEffect(() => {
    if (projectinformation.projectimg.type == "image/jpg" || projectinformation.projectimg.type == "image/png" || projectinformation.projectimg.type == "image/jpeg") {
      setimgfilestatus(true)
      setpreview(URL.createObjectURL(projectinformation.projectimg))
    }
    else {
      setimgfilestatus(false)
      setprojectinformation({ ...projectinformation, projectimg: "" })
      setpreview("")
    }
  }, [projectinformation.projectimg])




  const handleupdate = async () => {
const {title,Languages,github,overview,id,website}=projectinformation
if(title&&Languages&&github&&overview&&website){
  const reqbody=new FormData()
reqbody.append("title",title)
reqbody.append("Languages",Languages)
reqbody.append("github",github)
reqbody.append("website",website)
reqbody.append("overview",overview)

 preview? reqbody.append("projectimg",projectinformation.projectimg):reqbody.append("projectimg",pro.projectimg)

const token=sessionStorage.getItem("token")
console.log("ftyyt",token);

if(token){
const reqHeader ={
  "content-Type":preview?"multipart/form-data":"Application/json",
  "authorization":`Bearer ${token}`

}  
try {
  const result=await updateprojectapi(id,reqbody,reqHeader)
console.log(result);
if(result.status==200){
  seteditproject(result.data)
  handleClose()
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
    <div>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-to-square fa-xl text-success"></i></button>
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
                <img className='w-100' src={preview ? preview : `${serverurl}/upload/${pro.projectimg}`} alt="" />
                <input onChange={(e) => setprojectinformation({ ...projectinformation, projectimg: e.target.files[0] })} className='d-none' type="file" />

              </label>
              {!imgfilestatus &&
                <p className=' text-center text-warning'>*upload the file only (jpg,png,jpeg)</p>}
            </div>
            <div className="col-lg-8">
              <input value={projectinformation?.title} onChange={(e) => setprojectinformation({ ...projectinformation, title: e.target.value })} type="text" placeholder='Project title' className='w-75  bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
              <input value={projectinformation?.Languages} onChange={(e) => setprojectinformation({ ...projectinformation, Languages: e.target.value })} type="text" placeholder='Languages used' className='w-75 bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
              <input value={projectinformation?.github} onChange={(e) => setprojectinformation({ ...projectinformation, github: e.target.value })} type="text" placeholder='Project github link' className='w-75 bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
              <input value={projectinformation?.website} onChange={(e) => setprojectinformation({ ...projectinformation, website: e.target.value })} type="text" placeholder='Project website link' className='w-75 bg-secondary border border-none rounded p-2 mt-2 shadow mb-4' />
            </div>
            <input value={projectinformation?.overview} onChange={(e) => setprojectinformation({ ...projectinformation, overview: e.target.value })} t type="text" placeholder='Project overview' className='w-100 bg-secondary form-control border border-none rounded p-2 mt-2 shadow mb-4' />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleupdate} variant="primary">update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit

