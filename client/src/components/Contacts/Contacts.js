import React,{useEffect, useState} from 'react'
// import Mobile from './Mobile'
import {Form} from "react-bootstrap"
import {singnUp} from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'


function Contacts() {
 const dispatch = useDispatch();

  
 const [nom,setNom] = useState('')
 const [prenom,setPrenom] = useState('')
 const [telephone,setTelephone] = useState('')
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [adress,setAdress] = useState('')
 const [postal,setPostal] = useState('')
 const [ville,setVille] = useState('')
 const Submit = () => {

  dispatch(singnUp({nom,prenom,telephone,email,password,adress,postal,ville}))
}


  return (
    <div> 

{/* <div className="registerForm">
          <section className="get-in-touch">
    <h1 className="title">LogIn</h1>
    <form className="contact-form row">
      <div className="form-field col-lg-6">
        <input
          id="email"
          className="input-text js-input"
          type="email"
          required=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label" htmlFor="name">
          E-mail
        </label>
      </div>
      <div className="form-field col-lg-6 ">
        <input
          id="password"
          className="input-text js-input"
          type="password"
          required=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="label" htmlFor="email">
          Password
        </label>
      </div>
      <div className="form-field col-lg-6 ">
        <input

          id="password"
          className="input-text js-input"
          type="text"
          required=""
          onChange={(e) => setTelephone(e.target.value)}
        />
        <label className="label" htmlFor="email">
          phoneNumber
        </label>
      </div>

      <div className="form-field col-lg-12">
      <input  onClick={Submit} className="submit-btn" defaultValue="Submit" /> 
      </div>
    </form>
  <Link to ="/SignUp"><h6 className="signup-redirect">create an account ?</h6></Link>
  </section>
  </div> */}





         {/* <Mobile/> */}
        
        <Form className='signup'>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control type="text" placeholder="Enter Nom" onChange={(e)=> setNom(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="text" placeholder="Prenom" onChange={(e)=> setPrenom(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Téléphone</Form.Label>
          <Form.Control type="text" placeholder="Enter Telephone" onChange={(e)=> setTelephone(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVille">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adresse</Form.Label>
          <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=> setAdress(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPostal">
          <Form.Label>Code postal</Form.Label>
          <Form.Control type="text" placeholder="postal" onChange={(e)=> setPostal(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicVille">
          <Form.Label>Ville</Form.Label>
          <Form.Control type="text" placeholder="Ville" onChange={(e)=> setVille(e.target.value)}/>
        </Form.Group>
        <Link style={{textDecoration: 'none'}} to={'/'} > <Form.Control onClick={()=> Submit()} type="text" className="btn btn-primary" defaultValue="Submit" /></Link>
      
        
      </Form> 
    </div>
  )
}

export default Contacts