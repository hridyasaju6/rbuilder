import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:"400px", background:"purple"}} className='d-flex justify-content-center align-items-center flex-column text-light'>

        <h1>Contact Us</h1>
        <h3><MdEmail />resumebuilder@gmail.com</h3>
        <h4><FaPhoneAlt />9234567890</h4>
        <h2>Connect with us</h2>
        <div className='my-5 fs-4'>
            <FaWhatsapp /> 
            <FaFacebook className='mx-2'/>
             <FaInstagram />
        </div>
        <h4>Designed & built with using React </h4>
    </div>
  )
}

export default Footer