import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Header() {
  return (
    <>
      <div className='nav mx-5'>
        <div className='container-fluid d-lg-flex justify-content-between p-3 header align-items-center d-md-none d-none'>
          <a href='' style={{ width: '162px', height: '24px' }}><img src='whole.png' alt='title' /></a>
          <form className='form'>
            <span className='' style={{ backgroundColor: "#F2F2F2" }}><IoIosSearch /></span>
            <input
              placeholder='Search for your favorite group in ATG'
              className=''
            />
          </form>
          <button className='headbtn fs-5' data-bs-toggle='modal' data-bs-target='#createaccount'>Create account. <span className='fs-5'>It's free!<MdOutlineArrowDropDown /></span></button>
        </div>
      </div>


      <div className="modal fade" id="createaccount" style={{ padding: '23px'}}>
        <div className="modal-dialog modal-lg modal-dialog-centered createlgmodal">
          <button type='button' className='btn dialogbtn' data-bs-dismiss='modal'><span className='closebtn'><IoIosClose /></span></button>
          <div className="modal-content">
            <div className="text-center pt-3 pb-5">
              <p className="modal-title text-center" id="createaccount">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
              
            </div>
            <div className="crtdialog px-4">
              <div>
                <div className='container'>
                  <div className='row'>
                    <div className='col'style={{width:'320px'}}>
                      <h2 className='fw-bold mb-4'>Create Account</h2>
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
                      <button className='btn btn-primary w-100 my-3 crtbtn'>Create Account</button>
                      <div className='socbtn'>
                        <button className='w-100 mb-1 p-2'><span className='text-primary me-3'><FaFacebook /></span>Sign up with Facebook</button>
                        <button className='w-100 p-2'><span className='me-3'><FcGoogle /></span>Sign up with google</button>
                      </div>
                    </div>
                    <div className='col'style={{width:'736px'}}>
                        <p className='text-center'>Already have an account?<button className="nextmodbtn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Sign in</button></p>
                        <img src='signup.svg' />
                        <p style={{fontSize : '11px'}} className='text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="modal fade" id="exampleModalToggle2" >
        <div className="modal-dialog modal-lg modal-dialog-centered">
        <button type='button' className='btn dialogbtn2' data-bs-dismiss='modal'><span className='closebtn'><IoIosClose /></span></button>
          <div className="modal-content">
          <div className="text-center pt-3 pb-5">
              <p className="modal-title text-center" id="signin">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
              
            </div>
            

            <div className="crtdialog">
              <div>
                <div className='container'>
                  <div className='row'>
                    <div className='col'style={{width:'320px'}}>
                      <h2 className='fw-bold mb-4'>Sign In</h2>
                      
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
                      <button className='btn btn-primary w-100 my-3 crtbtn'>Sign in</button>
                      <div className='socbtn'>
                        <button className='w-100 mb-1 p-2'><span className='text-primary me-3'><FaFacebook /></span>Sign up with Facebook</button>
                        <button className='w-100 p-2'><span className='me-3'><FcGoogle /></span>Sign up with google</button>
                      </div>
                      <p className='text-center my-3'>Forgot Password?</p>
                    </div>
                    <div className='col'style={{width:'736px'}}>
                        <p className='text-center'>Don’t have an account yet? <button className="nextmodbtn2 fw-bold" data-bs-target="#createaccount" data-bs-toggle="modal" data-bs-dismiss="modal">Create new for free!</button></p>
                        <img src='signup.svg' />
                        <p style={{fontSize : '11px'}} className='text-center'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
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

export default Header
