import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

function Downloads() {
  return (
    <div className='container'>
      <div className='d-flex my-5 justify-content-between align-items-center'>
        <h1>Download Resume History</h1>
        <Link to={'/form'}> <IoMdArrowBack />Back</Link>
      </div>
      <div className='row mb-5'>
        <div className='col-md-4'>
          <div className='shadow p-3 rounded'>
            <div>
              <h5>Reviewed at: Time</h5>
              <button className='btn fs-5 text-danger'><MdDelete /></button>
            </div>
            <div className='mt-3 text-center'>
              <img height={'300px'} width={'200px'} src="https://www.my-resume-templates.com/wp-content/uploads/2023/07/job-resume-template-259.jpg" alt="CV" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Downloads