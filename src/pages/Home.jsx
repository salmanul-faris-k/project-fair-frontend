import React, { useEffect, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import images from '../assets/isometric-cms-concept-b.png'
import { gethomeproject } from '../service/Allapi'
import { toast } from 'react-toastify'

function Home() {
  const [homeproject,sethomeproject]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    homeprojects()
  },[])
  const homeprojects=async()=>{
    try {
      const result=await gethomeproject()
      console.log(result);
      if(result.status==200){
        sethomeproject(result.data)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const handleeproject=()=>{
if(sessionStorage.getItem('token')){
  navigate('/project')
}
else{
  toast.warning('please login to acess full project')
}
  }
  return (
    <>
  <div className="container row mt-5">
        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center p-4">
          <h1 className='fs-bold text-light'>
            <i class="fa-brands fa-foursquare fa-flip-horizontal fs-2"></i>&nbsp;
            Project Fair</h1>
          <p className='text-light m-2'>one top destination for sll software develepment projects.where user can add and manage their projects. as well as access all the projects available in our website..</p>
          {
            sessionStorage.getItem("token")?
            <Link to={'/dashboard'}><button  style={{borderRadius:'5px'}}className='btn btn-warning mt-2  '>manage your project</button></Link>

:
<Link to={'/login'}><button  style={{borderRadius:'5px'}}className='btn btn-warning mt-2  '>Start To Explore</button></Link>


          }
        </div>
        <div className="col-md-6">
          <img className='w-100 ms-md-5' src={images} alt="" />
        </div>
      </div>

      <div className='my-5'>
        <h2 className="text-center text-warning fw-bold">Explore Our Projects</h2>
        <marquee className='my-2'>
          <div className='d-flex  '>
           { homeproject?.length>0?
           <div className='d-flex gap-3'>
              {homeproject.map(pro=>(
                <ProjectCard  pro={pro}/>
              ))}
            </div>
            :
            <div className='text-danger'>project not found</div>
            }

          </div>
        </marquee>
<div className='text-center'>
  
<button onClick={handleeproject} className='text-center btn btn-link'>
          <p>Click Here To View More Projects</p>
        </button>
</div>
      </div>


      {/* testimonial */}
      <div className='my-5'>
        <h2 className="text-center text-warning fw-bold">Our Testimonials</h2>
        <div className='d-flex justify-content-center align-itens-center mt-5'>
          {/* card1 */}
          <Card className='me-5' style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>
                <div className="text-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/024/959/971/non_2x/businessman-portrait-elegant-man-in-business-suit-employee-of-business-institution-in-uniform-man-office-worker-business-avatar-profile-picture-illustration-vector.jpg" alt="" className="text-center rounded w-100" />
                </div>
              </Card.Title>
              <Card.Text>
                <h5 className='text-center mt-3 text-light'>Max Miller</h5>

                <div className="text-center mt-2">
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                </div>

                <p className='mt-3' style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae ipsum autem quod, dicta ullam vitae totam fuga fugiat
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card2 */}
          <Card className='me-5' style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>
                <div className="text-center">
                  <img src="https://static.vecteezy.com/system/resources/previews/024/966/233/original/businesswoman-portrait-beautiful-woman-in-business-suit-employee-of-business-institution-in-uniform-lady-office-worker-woman-business-avatar-profile-picture-illustration-vector.jpg" alt="" className="text-center rounded w-100" />
                </div>
              </Card.Title>
              <Card.Text>
                <h5 className='text-center mt-3 text-light'>Nita Sharma</h5>

                <div className="text-center mt-2">
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                </div>

                <p className='mt-3' style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae ipsum autem quod, dicta ullam vitae totam fuga fugiat
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          {/* card3 */}
          <Card className='me-5' style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>
                <div className="text-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHdOwcecQs58zkqYPCMAufw_zCY6nbAnkpYg&s" alt="" className="text-center rounded w-100" />
                </div>
              </Card.Title>
              <Card.Text>
                <h5 className='text-center mt-3 text-light'>David Jhon</h5>

                <div className="text-center mt-2">
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                  <i className="fa-solid fa-star text-primary"></i>
                </div>

                <p className='mt-3' style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae ipsum autem quod, dicta ullam vitae totam fuga fugiat
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

    
    </>
  )
}

export default Home
