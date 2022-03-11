
import React,{useState} from 'react'
import {Form} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {singnIN} from '../../redux/actions/actions'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'







function Enregistrer() {


    const dispatch = useDispatch();

    let history = useHistory();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const Submit = () => { 
        dispatch(singnIN({email,password},history))
      }



return(
    <div className='sinin'>
{/* <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVille">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Group>
        

        <Link style={{textDecoration: 'none'}} to={'/Devis'} > <Form.Control onClick={()=> Submit()} type="text" className="btn btn-primary" defaultValue="Submit" /></Link>
        
      </Form> */}
      <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login Form</h2>
        <div class="text-center mb-5 text-dark">Made with bootstrap</div>
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
            <img src="data:image/jpeg;base64,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" width="100" height="100"  
            class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"  alt="profile"/>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div class="text-center"><Link style={{textDecoration: 'none'}} to={'/'} > <Form.Control onClick={()=> Submit()} type="text" className="btn btn-primary" defaultValue="Submit" /></Link></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not Registered? <a href="#" class="text-dark fw-bold"> Create an Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
  )
}

export default Enregistrer