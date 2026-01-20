import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

export default function Contactlist() {
  return (
    <>
    <div className="container">
        <div className="row">
            <section className='contact-list-header p-3'>
                <div className="col-6">
                    <p className='h3'>Contact List <Link className='btn btn-primary' to="/add" ><i className='fa fa-plus-circle'></i></Link></p>
                    
                </div>
            </section>
        </div>
        <div className="row">
            <div className="col-4">
            <input type="search" name="" className='form-control' id="" placeholder='Search' />
            </div>
        </div>
        <div className="row  my-3 d-flex">
            <div className="col-6">
                <div className="card">
                    <div className="card-body d-flex justify-content-between align-items-center">
                <div className="col-4">
                   <img src="" className='contact-img' alt="" />
                </div>
                <div className="col-7">
                   <ul className='list-group'>
                    <li className='list-group-item'><span>Name</span></li>
                    <li className='list-group-item'><span>Contact</span></li>
                    <li className='list-group-item'><span>Email</span></li>

                   </ul>
                </div>
                <div className="col-1 d-flex flex-column flex-wrap align-items-center justify-content-center">
                    <Link to={`/edit/${1}`} className='btn btn-primary my-1 ms-2'><i className='fa fa-pen'></i></Link>
                    <Link to={`/view/${2}`} className='btn btn-warning my-1 ms-2'><i className='fa fa-eye'></i></Link>
                    <button className='btn btn-danger ms-2'><i className='fa fa-trash'></i></button>
                </div>
                </div>
                </div>


            </div>

        </div>
         
    </div>
    </>
  )
}
