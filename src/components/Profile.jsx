import React, { useEffect, useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import uploadimage from '../assets/profile_addfriend.png'
import serverurl from '../service/serviceurl';
import { toast } from 'react-toastify';
import { updateprofilapi } from '../service/Allapi';

function Profile() {
  const [userdetail, setuserdetail] = useState({ username: '', email: "", password: '', github: '', linkedin: "", Profilepic: "" })
  const [preview, setpreview] = useState("")
  console.log(userdetail,"gg");
  
  const [existingimg, setexistingimg] = useState("")

  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const existinguser = JSON.parse(sessionStorage.getItem("user"))

      console.log(existinguser);
      setuserdetail({ ...userdetail, username: existinguser?.username, email: existinguser?.email, password: existinguser?.password, github: existinguser?.github, linkedin: existinguser?.linkedin })

      setexistingimg(existinguser?.Profilepic)
    }
  }, [open])

useEffect(()=>{
if(userdetail?.Profilepic){
  setpreview(URL.createObjectURL(userdetail.Profilepic))
}
else{
  setpreview("")
}
},[userdetail.Profilepic])

  const handleudate=async()=>{
   const {username,email,password,github,linkedin,Profilepic}=userdetail
    if(github&&linkedin){
       const reqBody=new FormData()
       reqBody.append("username",username)
       reqBody.append("email",email)
       reqBody.append("password",password)
       reqBody.append("github",github)
       reqBody.append("linkedin",linkedin)
   preview?    reqBody.append("Profilepic",Profilepic):reqBody.append("Profilepic",existingimg)

const token=sessionStorage.getItem("token")
console.log("ftyyt",token);

if(token){
const reqHeader ={
  "content-Type":preview?"multipart/form-data":"Application/json",
  "authorization":`Bearer ${token}`

}  
try {
const result=await updateprofilapi(reqBody,reqHeader)
console.log(result);
if(result.status==200){
  setOpen(!open)
  sessionStorage.setItem("user",JSON.stringify(result.data))
}

} catch (error) {
  console.log(error);
  
}
}

    }
    else{
      toast.warning("enter the filed completely")
    }
  }
  return (
    <>
      <div className='d-flex justify-content-between'>
        <div>
          <h3 className='text-danger'>profile</h3>
        </div>
        <div>
          <button className='btn text-light'
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >

            <i class="fa-solid fa-chevron-down"></i>
          </button>
          <Collapse in={open}>
            <div id="example-collapse-text " className='w-100 ' >
              <label className='  '>
              <input onChange={(e) => setuserdetail({ ...userdetail, Profilepic: e.target.files[0] })} className='d-none' type="file" />

                {
                  existingimg ?
                    <img style={{ height: "150px", width: "150px",borderRadius:"50%" }} className='ms-5 mb-2' src={preview?preview:`${serverurl}/upload/${existingimg}`} alt="" />
                    :
                    <img style={{ height: "150px", width: "150px" }} className='ms-5' src={preview?preview:uploadimage} alt="" />

                }

              </label>
              <input onChange={(e) => setuserdetail({ ...userdetail, github: e.target.value })} value={userdetail?.github} type="text" placeholder='Languages used' className='w-75 bg-secondary border border-none rounded p-2   shadow mb-4' />
              <input onChange={(e) => setuserdetail({ ...userdetail, linkedin: e.target.value })} value={userdetail?.linkedin} type="text" placeholder='Project github link' className='w-75 bg-secondary border border-none rounded p-2  shadow mb-4' />
              <button onClick={handleudate} className='btn fw-bolder btn-warning w-75 mb-2'>update profile</button>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  )
}

export default Profile
