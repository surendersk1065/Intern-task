import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoMdCalendar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";

function Posts() {
    const post = [
        {
            id: 1,
            title: '✍️ Article',
            body: 'What if famous brands had regular fonts? Meet RegulaBrands!',
            text: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            image: 'i-1.jpeg',
            name: 'Sarthak Kamra',
            bgimg: 'img-1.jpeg'
        },
        {
            id: 2,
            title: '🔬️ Education',
            body: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
            text: 'I’ve worked in UX for the better part of a decade. From now on, I plan to rei…',
            image: 'i-2.jpeg',
            name: 'Sarah West',
            bgimg: 'img-2.jpeg'
        },


    ]
    const post2 = [
        {
            id: 1,
            title: '🗓️ Meetup',
            body: 'Finance & Investment Elite Social Mixer @Lujiazui',
            date: 'Fri, 12 Oct, 2018',
            loc: 'Ahmedabad, India',
            image: 'i-3.jpeg',
            name: 'Ronal Jones',
            bgimage: 'img-3.jpeg'
        }
    ]
    const group = [
        {
            id: 1,
            name: 'Leisure',
            img: 'I-5.jpeg'
        },
        {
            id: 2,
            name: 'Activism',
            img: 'I-6.jpeg'
        },
        {
            id: 3,
            name: 'MBA',
            img: 'I-8.jpeg'
        },
        {
            id: 4,
            name: 'Philosophy',
            img: 'I-8.jpeg'
        },
    ]
    return (

        <div className=' main mx-auto d-flex justify-content-center gap-5 mb-5'>

            <div className='post'>
                {
                    post.map((val) => (
                        <div className='card mb-4'key={val.id}>
                            <img src={val.bgimg} className='bgimage img-fluid' />
                            <div className='card-body'key={val.id}>
                                <p className='fs-4 fw-bold'>{val.title}</p>
                                <div className='d-flex justify-content-between'>
                                    <h1 className='head'>{val.body}</h1>
                                    <div className='dropdown'>
                                        <button className=" threebtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className=''><BsThreeDots /></span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                            <li><a className="dropdown-item" href="#">Report</a></li>
                                            <li><a className="dropdown-item" href="#">Action 3</a></li>
                                        </ul>
                                    </div>

                                </div>

                                <p className='mt-4'>{val.text}</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <img src={val.image} className='profile ' />
                                        <div className='d-lg-flex align-items-center w-100'>
                                            <p className='m-0' style={{fontSize : '18px', width: ''}}>{val.name}</p>
                                            <p className='view'><span><FaEye /></span>1.4k views</p>
                                        </div>
                                    </div>
                                    <button className='cardbtn p-2 rounded'><span className='me-md-2 '><FaShareAlt /></span><span className='d-lg-none'>share</span></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {
                    post2.map((val) => (
                        <div className='card mb-4' key={val.id}>
                            <img src={val.bgimage} className='bgimage img-fluid' />
                            <div className='card-body'key={val.id}>
                                <p className='fs-4 fw-bold'>{val.title}</p>
                                <div className='d-flex justify-content-between'>
                                    <h1 className='head'>{val.body}</h1>
                                    <div className='dropdown'>
                                        <button className=" threebtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span className=''><BsThreeDots /></span>
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a className="dropdown-item" href="#">Edit</a></li>
                                            <li><a className="dropdown-item" href="#">Report</a></li>
                                            <li><a className="dropdown-item" href="#">Action 3</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center pt-2'>
                                    <p><span className='fs-5 me-2'><IoMdCalendar /></span>{val.date}</p>
                                    <p className='mx-5'><span className='fs-5 me-2'><FaLocationDot /></span>{val.loc}</p>
                                </div>
                                <button className='w-100 p-1 rounded webbtn mt-1 mb-3'>View website</button>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <img src={val.image} className='profile' />
                                        <div className='d-lg-flex align-items-center w-100'>
                                            <p className='m-0'>{val.name}</p>
                                            <p className='view'><span><FaEye /></span>1.4k views</p>
                                        </div>
                                    </div>
                                    <button className='cardbtn p-2 rounded'><span className='mx-md-2 '><FaShareAlt /></span><span className='d-lg-none'>share</span></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

                <div className='card'>

                    <div className='card-body'>
                        <p className='fs-4 fw-bold'>💼️ Job</p>
                        <div className='d-flex justify-content-between'>
                            <h1 className='head'>Software Developer</h1>
                            <div className='dropdown'>
                                <button className=" threebtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className=''><BsThreeDots /></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Edit</a></li>
                                    <li><a className="dropdown-item" href="#">Report</a></li>
                                    <li><a className="dropdown-item" href="#">Action 3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='d-flex align-items-center pt-2'>
                            <p><span className='fs-5 me-2'><IoBagOutline /></span>Innovaccer Analytics Private Ltd.</p>
                            <p className='mx-5'><span className='fs-5 me-2'><FaLocationDot /></span>Noida, India</p>
                        </div>
                        <button className='w-100 p-1 rounded webbtn mt-1 mb-3'>Apply on Timejobs</button>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex gap-2 align-items-center'>
                                <img src='i-4.jpeg' className='profile' />
                                <div className='d-lg-flex align-items-center w-100'>
                                    <p className='m-0'>Joseph Gray</p>
                                    <p className='view'><span><FaEye /></span>1.4k views</p>
                                </div>
                            </div>
                            <button className='cardbtn p-2 rounded'><span className='mx-md-2 '><FaShareAlt /></span><span className='d-lg-none'>share</span></button>
                        </div>
                    </div>
                </div>

            </div>

            <div className='grp my-5 w-100'>
                <div className='input-group mb-2'>
                    <span className='me-2'><FaLocationDot /></span>
                    <input
                        placeholder='Enter Your Location'
                        className=''
                    />
                    <span className=''><MdEdit /></span>
                </div>
                <span className='me-2'><IoInformationCircleOutline /></span>
                <p className='mb-3 d-inline grppara'>Your location will help us serve better and extend a personalised experience.</p>

                <div className='mt-5'>
                    <span className='fs-5'><BiSolidLike /></span>
                    <span className='ms-3'>RECOMMENDED GROUPS</span>
                    {
                        group.map((val) => (
                            <div className='d-flex justify-content-between align-items-center my-3'>
                                <div className='d-flex align-items-center'>
                                    <img src={val.img} className='grpimg' />
                                    <p className='ms-3'>{val.name}</p>
                                </div>
                                <button className='follbtn p-2'>follow</button>
                            </div>
                        ))
                    }
                    <div className='text-end'>
                    <button className='seemore me-5'>see more....</button>
                    </div>
                </div>
                
            </div>

        </div>




    )
}

export default Posts
