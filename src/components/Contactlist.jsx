import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import '../index.css'
import { ContactService } from '../services/service'
import Loading from '../ui/Loading'

export default function Contactlist() {
    const [contacts, setContacts] = useState([])
    const [loading, setLoading] = useState(false)
    

    async function getAllContacts() {
        try {
            setLoading(true)
            let response = await ContactService.getAllContacts();
            console.log(response,"reponse");
            
            if (response.status !== 200) throw new Error("Failed to fetch!")

            let data = await response.data
            setLoading(false)
            setContacts(data)
            console.log(data);

        } catch (error) {

            console.error(error.message)
            setLoading(false)

        }

    }

    useEffect(()=>{
        
    getAllContacts()

    },[])

    console.log("contacts",contacts);
    

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
                <div className="row my-3 g-3">
                    {
                        loading?<Loading/>: contacts.map(contact=>{
                            return <div className="col-6">
                        <div className="card h-100">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div className="col-4">
                                    <img src={contact.photo} className="contact-img" alt="" />
                                </div>

                                <div className="col-7">
                                    <ul className="list-group">
                                        <li className="list-group-item"><span className='fst-italic fw-bold'>Name -</span>{contact.name}</li>
                                        <li className="list-group-item"><span className='fst-italic fw-bold'>Contact -</span>{contact.mobile}</li>
                                        <li className="list-group-item"><span className='fst-italic fw-bold'>Email -</span>{contact.email}</li>
                                    </ul>
                                </div>

                                <div className="col-1 d-flex flex-column align-items-center justify-content-center">
                                    <Link to={`/edit/${contact.id}`} className="btn btn-primary my-1 ms-2">
                                        <i className="fa fa-pen"></i>
                                    </Link>
                                    <Link to={`/view/${contact.id}`} className="btn btn-warning my-1 ms-2">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <button className="btn btn-danger ms-2">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
