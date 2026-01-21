import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContactService } from '../services/service';

export default function Viewcontact() {
   let {id}= useParams() 
   console.log(id);
   
    let [contact,setContact]=useState({

    })

    async function getContact(){
        let respoonse = await ContactService.getContact(id)
        let data=await respoonse.data
        console.log("getData",data);
        
        setContact(data)
    }

    useEffect(()=>{
        getContact()
    },[])
   
  return (
    <>
    <prev>{JSON.stringify({id})}</prev>
    <div className="container">
        <div className="row">
            <div className="col-md-6 my-3">
                <img className='img-fluid rounded-circle' style={{height:"200px", width:"200px"}} src={contact.photo} alt="" />
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <ul className='list-group'>
                    <li className='list-group-item'><span>Name -</span>{contact.name}</li>
                    <li className='list-group-item'><span>Email -</span>{contact.email}</li>
                    <li className='list-group-item'><span>Mobile -</span>{contact.mobile}</li>
                    <li className='list-group-item'><span>Company -</span>{contact.company}</li>
                    <li className='list-group-item'><span>Designation -</span>{contact.designation}</li>
                    <li className='list-group-item'><span>Group -</span>{contact.group}</li>
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
