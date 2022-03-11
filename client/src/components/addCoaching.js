import React, { useState }  from 'react';
import {Form, Button} from 'react-bootstrap'
import {useDispatch} from "react-redux"
import {useHistory, Link} from "react-router-dom"
import {Add_Cour} from '../redux/actions/actions'

function AddCoaching() {

    let history = useHistory()
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [date,setDate]=useState('')
    const [image,setImage]=useState('')
    const dispatch =useDispatch();
  const submitCoaching = () =>{
    dispatch(Add_Cour({title, description, date, image},history))
  }
  return (
      <div className='addcoaching'>
          <h3 style={{fontFamily: ' Satisfy'}}> Ajoutez un nouveau cour</h3>
          <div>
              <div className='courseaddedtitle'>


                  <Form.Group className="mb-3" controlId="texte">
                      <Form.Label>Titre</Form.Label>
                      <Form.Control type="text" placeholder="Ajouter Titre" onChange={(e) => setTitle(e.target.value)}/>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="texte">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="date" placeholder="Ajouter Date" onChange={(e) => setDate(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="texte">
                      <Form.Label>Description</Form.Label>
                      <Form.Control type='text' placeholder="Ajouter Description"
                                    onChange={(e) => setDescription(e.target.value)}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="texte">
                      <Form.Label>Lien d'image</Form.Label>
                      <Form.Control type='text' placeholder="Ajouter lien" onChange={(e) => setImage(e.target.value)}/>
                  </Form.Group>

              </div>

          </div>
          <Button variant="outline-dark" onClick={submitCoaching}><Link to={"/Cours de Coaching"}
                                                                        style={{textDecoration: 'none'}}>Submit</Link></Button>

      </div>

  )
}

export default AddCoaching