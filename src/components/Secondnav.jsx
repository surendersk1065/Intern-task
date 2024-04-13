import React, { useState } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";

function Secondnav() {
    const [button, setButton] = useState(false)
    const handleJoin = () =>{
        setButton(!button)
    }
    return (
        <div className='secnav sticky-top'>
        <div className=' container d-lg-flex justify-content-between mx-auto align-items-center p-3 d-md-none d-none'>
            <div>
                <ul className='nav '>
                    <li className='nav-item '><a className='nav-link active text-decoration-none text-dark active-link' href='#'>All Posts(32)</a></li>
                    <li className='nav-item'><a className='nav-link text-decoration-none' style={{color : '#8A8A8A'}} href='#'>Article</a></li>
                    <li className='nav-item'><a className='nav-link text-decoration-none' style={{color : '#8A8A8A'}} href='#'>Event</a></li>
                    <li className='nav-item'><a className='nav-link text-decoration-none' style={{color : '#8A8A8A'}} href='#'>Education</a></li>
                    <li className='nav-item'><a className='nav-link text-decoration-none' style={{color : '#8A8A8A'}} href='#'>Job</a></li>
                </ul>
            </div>
            <div className='secnavbtn'>
                <button className='p-2 px-3 me-3 rounded ' style={{backgroundColor:'#EDEEF0'}}>Write a Post<span><MdOutlineArrowDropDown /></span></button>
                <button className='p-2 px-3 rounded text-light' onClick={handleJoin} style={{backgroundColor : '#2F6CE5'}}><span className='me-2 '><MdGroupAdd /></span>{button ? 'Leave group' : 'Join group'}</button>
                
            </div>
            
        </div>
        
        
        </div>
    )
}

export default Secondnav
