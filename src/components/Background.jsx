import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

function Background() {
    const [button, setButton] = useState(false)
    const handleJoin = () => {
        setButton(!button)
        
    }
    return (
        <>
            <div className='background text-light'>
                <div className=' container button d-flex justify-content-between pt-3 d-lg-none'>
                    <span className='fs-5 icon'><FaArrowLeft /></span>
                    <button className='p-2 rounded fw-bold' onClick={handleJoin}>{button ? ('Leave group') : ('Join group')}</button>
                </div>
                <div className='cont'>
                    <p className='m-0 fs-1'>Computer Engineering</p>
                    <p style={{ fontSize: '18px' }}>142,765 Computer Engineers follow this</p>
                </div>
            </div>
        </>
    )
}

export default Background
