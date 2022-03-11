import React from 'react'
// import {useSelector} from 'react-redux'
import ListePersonnes from './listePersonnes'
import AddCoachingCour from '../addCoaching'
import {Figure, Card, CardGroup} from 'react-bootstrap'
function Profile() {
  const currentUser = JSON.parse(localStorage.getItem('current_user'))

  return (
    <div>
      {/* {currentUser.role !== 'admin' ? 'this is a guest' : 'this is an admin'} */}

      <div className="profile">
   <div className='figure'>
      <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/273692716_1132385904191760_5017312497319602718_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=8iWOVE9-A30AX8lMyq8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJTK4egdWgCIEtIAF39qdur2gnRQ7A41J4x-ZnsHRYA9w&oe=6243EF11"
/>
  <Figure.Caption>
  <h1  style ={{ fontFamily:' Satisfy'}}> Profile</h1>
  </Figure.Caption>
</Figure>



<CardGroup>
  <Card className='profilCard' style={{ width: '10rem' , height: '15rem'}}>
   
    <Card.Body>
      <Card.Title>Agenda<i class="fa-solid fa-calendar-days"></i></Card.Title>
      <Card.Text>vous avez deux reunions cette semaine</Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card className='profilCard' style={{ width: '10rem' , height: '15rem'}}>

    <Card.Body>
      <Card.Title>Vos tâches de la semaine <i class="fa-solid fa-list-check"></i></Card.Title>
     
      <Card.Text>
      -Verifier les devis
      <br></br>
      -Contacter les personnes interessees
      
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

</CardGroup>
</div>
<AddCoachingCour/>
<ListePersonnes/>
</div>


    </div>
  )
}

export default Profile