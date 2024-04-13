import React from 'react'
import { MdEdit } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Popup() {
  return (
    <>
    <div className='d-md-none'>
      <button className='popbtn' data-bs-toggle='modal' data-bs-target='#mobilecreateaccount'><span className='text-light fs-2'><MdEdit /></span></button>
    </div>


    <div className="modal fade" id="mobilecreateaccount" style={{marginTop:'210px'}}>
        <div className="modal-dialog modal-fullscreen d-md-none">
          
          <div className="modal-content">
            
            <div className="crtdialog px-4">
              <div>
                <div className='container'>
                  <div className='pt-3'>
                    <div className=' d-flex  justify-content-between'>
                      <p className='fs-2 fw-bold mt-3'>Create Account</p>
                      <button type='button' className='btn' data-bs-dismiss='modal'><span className='fs-1'><IoIosCloseCircle /></span></button>
                      </div>
                      <div className=' d-flex w-100'>
                        <input 
                          type='text'
                          className='form-control mb-1 me-1'
                          placeholder='First Name' 
                        />
                        <input 
                          type='text'
                          className='form-control mb-1'
                          placeholder='Last Name' 
                        />
                      </div>
                      <div className=' w-100'>
                        <input 
                          type='text'
                          className='form-control mb-1'
                          placeholder='Email' 
                        />
                        <input 
                          type='password'
                          className='form-control mb-1'
                          placeholder='Password' 
                        />
                        <input 
                          type='text'
                          className='form-control'
                          placeholder='Confirm Password' 
                        />
                      </div>
                      <div className='d-flex justify-content-between'>
                      <button className='btn btn-primary  my-3 crtbtn'>Create Account</button>
                      <button className="nextmodbtn text-decoration-underline" data-bs-target="#signinmodal" data-bs-toggle="modal" data-bs-dismiss="modal">or Sign in</button>
                      </div>
                      
                      <div className='socbtn'>
                        <button className='w-100 mb-1 p-2'><span className='text-primary me-3'><FaFacebook /></span>Sign up with Facebook</button>
                        <button className='w-100 p-2'><span className='me-3'><FcGoogle /></span>Sign up with google</button>
                      </div>
                      <p style={{fontSize : '11px'}} className='text-center mt-4 mb-2'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="signinmodal" style={{marginTop:'210px'}}>
        <div className="modal-dialog modal-fullscreen d-md-none">
        
          <div className="modal-content">
          
            

            <div className="crtdialog px-4">
              <div>
                <div className='container'>
                  <div className=''>
                  <div className='pt-3 d-flex justify-content-between'>
                      <p className='fw-bold fs-2 mt-3'>Welcome Back</p>
                      <button type='button' className='btn mobclose' data-bs-dismiss='modal'><span className='closebtn'><IoIosCloseCircle /></span></button>
                      </div>
                      
                      <div className=' w-100'>
                        <input 
                          type='text'
                          className='form-control mb-1'
                          placeholder='Email' 
                        />
                        <input 
                          type='password'
                          className='form-control mb-1'
                          placeholder='Password' 
                        />
                        
                      </div>
                      <div className='d-flex justify-content-between'>
                      <button className='btn btn-primary  my-3 crtbtn'>Sign in</button>
                      <button className="nextmodbtn text-decoration-underline" data-bs-target="#mobilecreateaccount" data-bs-toggle="modal" data-bs-dismiss="modal">or Create Account</button>
                      </div>
                      <div className='socbtn'>
                        <button className='w-100 mb-1 p-2'><span className='text-primary me-3'><FaFacebook /></span>Sign up with Facebook</button>
                        <button className='w-100 p-2'><span className='me-3'><FcGoogle /></span>Sign up with google</button>
                      </div>
                      <p className='text-center my-3'>Forgot Password?</p>
                    
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
    
  )
}

export default Popup
