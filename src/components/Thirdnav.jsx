import React from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";

function Thirdnav() {
  return (
    <div className='container-fluid py-3 d-lg-none'>
      <div className='d-flex justify-content-between align-items-center'>
        <p className='fw-bold'>Posts(368)</p>
        <button className='tbtn p-2 rounded'>Filter: All<span><MdOutlineArrowDropDown /></span></button>
      </div>
    </div>
  )
}

export default Thirdnav
