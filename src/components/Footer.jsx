import React from 'react'

function Footer() {
  return (
    <>
     <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Left Section - Company Info */}
          <div className="col-md-3 mb-4">
          <h4 className='fs-bold text-light'>
            <i class="fa-brands fa-foursquare fa-flip-horizontal fs-5"></i>&nbsp;
            Project Fair</h4>
            <p>
            one top destination for sll software develepment projects.where user can add and manage their projects. as well as access all the projects available in our website..            </p>
            <a href="#" className="text-warning text-decoration-none">
              read more →
            </a>
          </div>

          {/* Middle Section - Links */}
          <div className="col-md-2 mb-4">
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Buy & Sell</a></li>
              <li><a href="#" className="text-light text-decoration-none">Merchant</a></li>
              <li><a href="#" className="text-light text-decoration-none">Giving back</a></li>
              <li><a href="#" className="text-light text-decoration-none">Help & Support</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Staff</a></li>
              <li><a href="#" className="text-light text-decoration-none">Team</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Security</a></li>
              <li><a href="#" className="text-light text-decoration-none">Global</a></li>
              <li><a href="#" className="text-light text-decoration-none">Charts</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5>Contact Us</h5>
            <form action="" className='d-flex'>
                <input type="text" style={{width:'250px'}} className='form-control me-3' placeholder='Enter Email...' />
                <button className='btn btn-warning'>
                <i class="fa-regular fa-paper-plane"></i>
                </button>
            </form>
            <ul className="list-unstyled d-flex justify-content-evenly mt-3">
                <li>
                    <a href="#" className="text-light text-decoration-none">
                    <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-light text-decoration-none">
                    <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-light text-decoration-none">
                    <i class="fa-brands fa-github"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-light text-decoration-none">
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-light text-decoration-none">
                    <i class="fa-solid fa-phone"></i>
                    </a>
                </li>
            </ul>

          </div>
        </div>

        {/* Divider */}
        <hr className="bg-secondary" />

        {/* Bottom Section */}
        <div className="d-flex justify-content-between flex-wrap">
          <p>© 2024 Project Fair.com | All Rights Reserved.</p>
          <div>
            <a href="#" className="text-light me-3 text-decoration-none">Terms</a>
            <a href="#" className="text-light me-3 text-decoration-none">Privacy</a>
            <a href="#" className="text-light text-decoration-none">Compliances</a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer

