import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Viewcontact() {
   let id= useParams() 
   console.log(id);
   
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img className='img-fluid' style={{height:"200px", width:"200px"}} src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png" alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <ul className='list-group'>
                    <li className='list-group-item'><span>Name</span></li>
                    <li className='list-group-item'><span>Email</span></li>
                    <li className='list-group-item'><span>Mobile</span></li>
                    <li className='list-group-item'><span>Company</span></li>
                    <li className='list-group-item'><span>Designation</span></li>
                    <li className='list-group-item'><span>Group</span></li>
                </ul>
            </div>
        </div>
        <div className="row">
            <div className="col-md-2 my-2">
                
            <Link className='btn btn-warning' to='/'>Back</Link>
            </div>
        </div>
    </div>
      
    </>
  )
}
