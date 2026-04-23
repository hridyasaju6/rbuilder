import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src='https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json' />
      <h1 className='mt-3'>Page not Found</h1>
      <h1 className='mt-3'>WE ARE SORRY ,LOOK LIKE YOU LOST</h1>
      <Link to={'/'}> Back to Home</Link>
    </div>
  )
}

export default PageNotFound