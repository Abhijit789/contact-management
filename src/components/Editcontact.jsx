import React from 'react'
import Input from '../ui/Input'
import { Link } from 'react-router-dom'

export default function Editcontact() {
  return (
    <>
      <div className="container p-3">
        <div className="row">
            <p className='h3 text-success'>Edit Contact</p>
        </div>
        <div className="row">
            <div className="col-md-4">
                <form action="">
                    <div className="my-2">
                        <Input type="text" placeholder="Name" id="name" name="name" className="form-control"/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Photo" id="photo" name="photourl" className="form-control"/>
                    </div>
                    <div className="my-2">
                        <Input type="tel" placeholder="Mobile" id="mobile" name="mobile" className="form-control"/>
                    </div>
                    <div className="my-2">
                        <Input type="email" placeholder="M@il" id="email" name="email" className="form-control"/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Company" id="compoany" name="company" className="form-control"/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Designation" id="designation" name="designation" className="form-control"/>
                    </div>
                    <div className="my-2">
                        <Input type="text" placeholder="Group" id="group" name="group" className="form-control"/>
                    </div>
                    <div className="col d-flex">
                        <div className="my-2">
                        <Input type="submit" value="Update" placeholder="Name" id="name" name="name" className="btn btn-success"/>
                    </div>
                    <div className="my-2 ms-2">
                        <Link to='/'  placeholder="Name" id="name" name="name" className="btn btn-dark text-light">
                          Cancel
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

