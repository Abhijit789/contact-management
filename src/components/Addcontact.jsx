import React, { useState } from 'react'
import Input from '../ui/Input'
import { Link, Navigate, replace, useNavigate } from 'react-router-dom'
import { buttonLabels, componentHeadings } from '../ui-constants/constant'
import { ContactService } from '../services/service'

export default function Addcontact() {
    const navigate=useNavigate()
    const[contact,setContact]=useState({
        name:"",
        photo:"",
        mobile:"",
        email:"",
        company:"",
        designation:"",
        group:""
    })

    function handleChange(e){
        let{name,value}=e.target
        setContact(prev=>({
            ...prev,
            [name]:value
        }))
        

    }

    async function createContact(e){
        e.preventDefault()
        try{
        let response=await ContactService.createContact(contact);
        let data=await response.data
        console.log("form submitted",data);
        navigate("/")
        }catch(error){
            console.error(error.message)
        }
        
        
        

        
    }
    console.log(contact,"contacts");
    
  return (
    <>
      <div className="container p-3">
        <div className="row">
            <p className='h3 text-primary'>{componentHeadings.addcontact}</p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <form action="" onSubmit={(e)=>{createContact(e)}}>
                    <div className="my-2">
                        <Input type="text" placeholder="Name" id="name" name="name" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Photo" id="photo" name="photo" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <Input type="tel" placeholder="Mobile" id="mobile" name="mobile" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <Input type="email" placeholder="M@il" id="email" name="email" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Company" id="compoany" name="company" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Designation" id="designation" name="designation" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Group" id="group" name="group" className="form-control" handleChange={handleChange}/>
                    </div>
                    <div className="col d-flex">
                        <div className="my-2">
                        <Input type="submit" value={buttonLabels.submit} placeholder="Name" id="name" name="name" className="btn btn-primary"/>
                    </div>
                    <div className="my-2 ms-2">
                        <Link to='/'  placeholder="Name" id="name" name="name" className="btn btn-dark text-light">
                          {buttonLabels.cancel}
                        </Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </>
  )
}

