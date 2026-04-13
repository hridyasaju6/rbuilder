import React from 'react'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    {/* {landing} */}
    <div style={{height:"100vh", backgroundImage:'url("/landing.png")', backgroundSize:'cover', backgroundPosition:"center", backgroundAttachment:"fixed"}} className='d-flex justify-content-center align-items-center'>
    <div className='row container-fluid'>
      <div className='col-lg-4'></div>
      <div className='col-lg-4 rounded shadow p-5 text-center  text-light' style={{backgroundColor:"rgba(108,102,90,0.4)"}}>
        <h3>Designed to get hired.
          Your skills, Your story,Your next job - all in one
        </h3>
        <Link to={'/steps'}>ClassName="btn text-light" style={{backgroundColor:""}}Make Your Resume</Link>
      </div>
      <div className='col-lg-4'></div>
    </div>
    
    </div>
    {/* tools */}
    {/* image */}
    {/* testimony */}
    </>
  )
}

export default Home