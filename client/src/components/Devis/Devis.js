import React,{ useState} from 'react'

import {Form} from "react-bootstrap"
import {addDevis} from '../../redux/actions/actions'
import {useDispatch} from 'react-redux'



function Devis() {
  const dispatch = useDispatch();
  const [nom,setNom] = useState('')
  const [prenom,setPrenom] = useState('')
  const [telephone,setTelephone] = useState('')
  const [email,setEmail] = useState('')
  const [adress,setAdress] = useState('')
  const [superficie,setSuperficie] = useState('')
  const [motif,setMotif] = useState('')
  
  const Envoyervotredemande = () => {
   dispatch(addDevis({nom,prenom,telephone,email,adress,superficie,motif}))
   alert("demande envoyee avec succes")}
 
 
 
   return (
     <div className="devis"> 
     <h1 style ={{ fontFamily:' Satisfy'}}> Merci de remplir ce formulaire, notre architecte vous contactera</h1>
         <Form className="signup">
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Nom</Form.Label>
           <Form.Control type="text" placeholder="Entrer Nom" onChange={(e)=> setNom(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Prénom</Form.Label>
           <Form.Control type="text" placeholder="Entrer Prénom" onChange={(e)=> setPrenom(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Téléphone</Form.Label>
           <Form.Control type="text" placeholder="Entrer Téléphone" onChange={(e)=> setTelephone(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Email</Form.Label>
           <Form.Control type="text" placeholder="Entrer Email" onChange={(e)=> setEmail(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formtext">
           <Form.Label>Adresse</Form.Label>
           <Form.Control type="text" placeholder="Enter Adress" onChange={(e)=> setAdress(e.target.value)}/>
         </Form.Group>
      
         <Form.Group className="mb-3" controlId="formBasicPostal">
           <Form.Label>Superficie (en m²)</Form.Label>
           <Form.Control type="text" placeholder="postal" onChange={(e)=> setSuperficie(e.target.value)}/>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicVille">

         <Form.Select onChange={(e)=> setMotif(e.target.value)} aria-label="Default select example">
  <option>Motif</option>
  <option value={'devis' }> Devis</option>
  <option value={'coaching' }>Coaching</option>
  <option value={'forfait' }>Forfait</option>
</Form.Select>
         
         </Form.Group>
       
            <Form.Control onClick={()=> Envoyervotredemande()} type="text" className="btn btn-primary" defaultValue="Envoyer votre demande" />
          
         
       </Form>
     </div>
   )
 }
 
 export default Devis