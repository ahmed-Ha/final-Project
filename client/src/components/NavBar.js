import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar,Container, Nav,NavDropdown} from 'react-bootstrap'
import Logo from "./img/Logo.png";
const currentUser = JSON.parse(localStorage.getItem('current_user'))
function NavBar() {
    const logout = () =>{
        localStorage.clear();
        setTimeout(() => {
            window.location.reload();
        }, 800);
    }
    return (


        <Navbar className="navbackground" collapseOnSelect expand="lg"  bg="black" variant="dark">
            <Container>
                <Navbar.Brand className="nav-logo" >
                    <img src={Logo} width="100" height="100" className='logoarch'/>
                    <div class="top-bar sticky">
                        <span className="nav-title">LEYLA NJIM</span>
                        <span className="nav-text">Architecte d'intérieur </span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='font-color'>Acceuil</Nav.Link>
                            {currentUser?.role == 'admin' ?
                                <div className="d-flex">
                                    <Nav.Link as={Link} to='/LeylaNjim' className='font-color' >LeylaNjim</Nav.Link>
                                    <Nav.Link as={Link} to='/Cours de Coaching' className='font-color'>Cours de Coaching</Nav.Link>
                                    <Nav.Link as={Link} to='/Forfaits' className='font-color' >Forfaits</Nav.Link>
                                    <Nav.Link as={Link} to='/Devis'className='font-color' >Devis</Nav.Link>
                                    <NavDropdown title={`Prestations`} id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to='/Agencement & de locaux professionnels' >Agencement de locaux professionnels</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/Décorattion & aménagement pour particulier' >Décorattion & aménagement pour particulier</NavDropdown.Item>
                                        <NavDropdown.Item as={Link} to='/Information' >Information</NavDropdown.Item>

                                        {/* <NavDropdown.Divider /> */}
                                        {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                    </NavDropdown  >

                                    <Nav.Link as={Link} to='/Réalisations' className='font-color'>Réalisations</Nav.Link>
                                </div>

                                :
                                currentUser?.role == 'user' ?
                                    <div className='d-flex'>
                                        <Nav.Link as={Link} to='/Cours de Coaching' className='font-color'>Cours de Coaching</Nav.Link>
                                        <Nav.Link as={Link} to='/Forfaits' className='font-color' >Forfaits</Nav.Link>
                                        <Nav.Link as={Link} to='/Devis'className='font-color' >Devis</Nav.Link>
                                        <NavDropdown title={`Prestations`} id="collasible-nav-dropdown">
                                            <NavDropdown.Item as={Link} to='/Agencement & de locaux professionnels' >Agencement de locaux professionnels</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/Décorattion & aménagement pour particulier' >Décorattion & aménagement pour particulier</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/Information' >Information</NavDropdown.Item>

                                            {/* <NavDropdown.Divider /> */}
                                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                        </NavDropdown  >

                                        <Nav.Link as={Link} to='/Réalisations' className='font-color'>Réalisations</Nav.Link>
                                    </div>
                                    :
                                    <div className='d-flex'>
                                        <NavDropdown title={`Prestations`} id="collasible-nav-dropdown">
                                            <NavDropdown.Item as={Link} to='/Agencement & de locaux professionnels' >Agencement de locaux professionnels</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/Décorattion & aménagement pour particulier' >Décorattion & aménagement pour particulier</NavDropdown.Item>
                                            <NavDropdown.Item as={Link} to='/Information' >Information</NavDropdown.Item>

                                            {/* <NavDropdown.Divider /> */}
                                            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                                        </NavDropdown  >

                                        <Nav.Link as={Link} to='/Réalisations' className='font-color'>Réalisations</Nav.Link>
                                    </div>
                            }




                            {/* <Nav.Link as={Link} to='/Contacts' >Contacts</Nav.Link> */}
                            {currentUser ? <Nav.Link onClick={()=> logout()} >Logout</Nav.Link> : <NavDropdown title={`SingIN/SignUP`}id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='/SingIN' >SingIN</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='/SignUP' >SignUP</NavDropdown.Item>


                                {/* <NavDropdown.Divider /> */}
                                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                            </NavDropdown> }

                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar