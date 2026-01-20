import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     <div className="container-fluid bg-dark">
        <div className="row">
            <div className="col d-flex align-item-center">
                <Link to="/" className='text-light p-2 text-decoration-none' ><i className='fa fa-mobile text-warning'></i> Contact <span className='text-warning'>Manager</span></Link>
            </div>
        </div>

     </div>
    </>
  )
}
