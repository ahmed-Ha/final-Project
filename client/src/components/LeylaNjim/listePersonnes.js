import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {afficheDevis } from '../../redux/actions/actions';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'




function ListePersonnes() {

const dispatch=useDispatch()

    dispatch(afficheDevis())

const pers = useSelector((state) => state.UserReducer.afficheCours)

  return (
    <div  className='addcoaching'> 
        <h3 style ={{ fontFamily:' Satisfy'}}>la liste des personnes interessees</h3>
        {pers?.map((el, key) =>(
<div>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{el.nom}</Card.Title>
    <Card.Text>{el.prenom}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{el.telephone}</ListGroupItem>
    <ListGroupItem>{el.email}</ListGroupItem>
    <ListGroupItem>{el.adress}</ListGroupItem>
    <ListGroupItem>{el.superficie}</ListGroupItem>
    <ListGroupItem>{el.motif}</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>

</div>
    ))}   
    
    
    
    
    
    
    
    </div>
  )
}

export default ListePersonnes