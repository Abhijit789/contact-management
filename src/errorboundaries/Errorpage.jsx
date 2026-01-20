import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage() {
  return (
    <>
     <div className="container">
        <div className="row">
            <div className="col d-flex flex-column">
                <p className='text-center h1 text-danger'>Ooop's Page Not Found 404</p>
                <div className="col-md-2">
                <Link className='btn btn-warning' to='/'>Home</Link>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
