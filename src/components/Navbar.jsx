import  { useContext } from 'react'
import { Link} from 'react-router-dom'
import { ContextTheme } from '../contextapi/ContextTheme'

export default function Navbar() {
  const{theme,toggleTheme}=useContext(ContextTheme)
  
  
  return (
    <>
     <div className={`container-fluid`} style={{backgroundColor:`${theme=="light"?"black":"pink"}`}}>
        <div className="row">
            <div className="col d-flex align-item-center">
                <Link to="/" className='text-light p-2 text-decoration-none' ><i className='fa fa-mobile text-warning'></i> Contact <span className='text-warning'>Manager</span></Link>
                <button className='btn btn-primary' style={{backgroundColor:`${theme=="light"?"black":"white"}`,color:`${theme=="light"?"white":"black"}`}} onClick={()=>{toggleTheme()}}><i className='fa fa-moon'  ></i></button>
            </div>
        </div>

     </div>
    </>
  )
}
