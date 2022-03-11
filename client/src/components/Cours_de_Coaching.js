import React, {useState, useEffect} from 'react'
import {Card, Form, Modal, Button} from 'react-bootstrap'
import {Add_Cour, addDevis, Affiche_Cour, deleteCours} from '../redux/actions/actions'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useHistory} from "react-router-dom";


function Cours_de_Coaching() {
    const currentUser = JSON.parse(localStorage.getItem('current_user'))
    const [show, setShow] = useState(false);
    const [showCour, setShowCour] = useState(false);
    const handleClose = () => setShow(false);
    const handleCloseCour = () => setShowCour(false);
    const handleShow = () => setShow(true)
    const handleShowCour = () => setShowCour(true)
    const dispatch = useDispatch()
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [telephone, setTelephone] = useState('')
    const [email, setEmail] = useState('')
    const [adress, setAdress] = useState('')
    const [superficie, setSuperficie] = useState('')
    const [motif, setMotif] = useState('')
    const Envoyervotredemande = () => {
        dispatch(addDevis({nom, prenom, telephone, email, adress, superficie, motif}))
        alert("demande envoyee avec succes")
    }
    let history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const submitCoaching = () => {
        dispatch(Add_Cour({title, description, date, image}, history))
    }
// pour l'affichage des cours : on utilise use effect pour que de redux dispatche l'action quand la page est ouverte
//use selector pour extraire le state du redux 
    useEffect(() => {
        dispatch(Affiche_Cour())
    }, [])
//what are excatly trainings that are being map??
    const coaching = useSelector((state) => state.UserReducer.afficheCours)

    return (
        <div>
            <Button variant="primary" onClick={handleShowCour}>Add Cours</Button>
            <Modal show={showCour} onHide={handleCloseCour}>
                <div style={{fontFamily: ' Satisfy', fontSize: '50px',}}>Ajoutez un nouveau cour</div>
                <div className='addcoaching'>
                    <div>
                        <div className='courseaddedtitle'>


                            <Form.Group className="mb-3" controlId="texte">
                                <Form.Label>Titre</Form.Label>
                                <Form.Control type="text" placeholder="Ajouter Titre"
                                              onChange={(e) => setTitle(e.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="texte">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="date" placeholder="Ajouter Date"
                                              onChange={(e) => setDate(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="texte">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type='text' placeholder="Ajouter Description"
                                              onChange={(e) => setDescription(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="texte">
                                <Form.Label>Lien d'image</Form.Label>
                                <Form.Control type='text' placeholder="Ajouter lien"
                                              onChange={(e) => setImage(e.target.value)}/>
                            </Form.Group>

                        </div>

                    </div>
                    <Button variant="outline-dark" onClick={submitCoaching}>
                        <Link to={"/Cours de Coaching"}
                              style={{textDecoration: 'none'}}>Submit</Link>
                    </Button>

                </div>
            </Modal>
            <div style={{fontFamily: ' Satisfy', fontSize: '50px',}}>Les cours disponibles sont les suivants:</div>
            {coaching?.map((el, key) => (<div><Card>
                <Card.Body>
                    <Card.Title>
                        <h5>{el.title}</h5>
                        <h3>{el.date}</h3>
                    </Card.Title>
                    <Card.Text>
                        <li>{el.description}</li>
                        <img src={el.image}/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleShow} variant="primary"> RESERVER</Button>
                    <Button onClick={deleteCours(el._id)} variant="delete"> Delete</Button>
                </Card.Footer>
            </Card></div>))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please fill this form and the team team will contact you</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form className="MODALDEVIS">
                        <Form.Group className="mb-3" controlId="formtext">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" placeholder="Entrer Nom"
                                          onChange={(e) => setNom(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formtext">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" placeholder="Entrer Prenom"
                                          onChange={(e) => setPrenom(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formtext">
                            <Form.Label>Téléphone</Form.Label>
                            <Form.Control type="text" placeholder="Entrer Téléphone"
                                          onChange={(e) => setTelephone(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formtext">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formtext">
                            <Form.Label>Adresse</Form.Label>
                            <Form.Control type="text" placeholder="Enter Adress"
                                          onChange={(e) => setAdress(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="fformtext">
                            <Form.Label>Superficie (en m²)</Form.Label>
                            <Form.Control type="text" placeholder="postal"
                                          onChange={(e) => setSuperficie(e.target.value)}/>
                        </Form.Group>
                        <Form.Select onChange={(e) => setMotif(e.target.value)} aria-label="Default select example">
                            <option>Motif</option>
                            <option value={'devis'}> devis</option>
                            <option value={'coaching'}>coaching</option>
                            <option value={'forfait'}>forfait</option>
                        </Form.Select>

                        <Form.Control onClick={() => Envoyervotredemande()} type="text" className="btn btn-primary"
                                      defaultValue="Envoyer votre demande"/>


                    </Form>
                </Modal.Body>

            </Modal>
        </div>

    )
}

export default Cours_de_Coaching