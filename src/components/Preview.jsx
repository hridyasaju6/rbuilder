import React from 'react'
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';

function Preview({ resumeData }) {  // ✅ RECEIVE PROPS

  const {
    fullName = "",
    phone = "",
    email = "",
    linkedin = "",
    github = "",
    location = "",
    summary = "",
    skills = [],
    degree = "",
    university = "",
    passOut = ""
  } = resumeData || {};

  return (
    <div className='p-5 m-5 w-100'>

      <h2>{fullName}</h2>
      <p className='fs-6'>Phone: {phone}</p>
      <p className='fs-6'>Email: {email}</p>

      <p className='fs-6'>
        LinkedIn: <a href={linkedin || "#"}>URL</a>
      </p>

      <p className='fs-6'>
        Github: <a href={github || "#"}>URL</a>
      </p>

      <p className='fs-6'>Location: {location}</p>

      <Divider className='bg-dark my-3' />

      <h4 className='mt-3'>Professional Summary</h4>
      <p>{summary}</p>

      <Divider className='bg-dark my-3' />

      <h4 className='mt-3'>Technical Skills</h4>

      {
        (Array.isArray(skills) ? skills : []).map((item, index) => (
          <Button className='m-2' key={index} variant="outlined">
            {item}
          </Button>
        ))
      }

      <Divider className='bg-dark my-3' />

      <h4>Education</h4>
      <p className='fs-6'>
        Bachelor's Degree in <b>{degree}</b>
      </p>
      <p className='fs-6'>University/College: {university}</p>
      <p className='fs-6'>Year of Graduation: {passOut}</p>

      <Divider className='bg-dark my-3' />

    </div>
  )
}

export default Preview