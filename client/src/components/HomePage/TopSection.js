import React from 'react'
import img16 from '../img/img16.jpg'
import img22 from '../img/img22.jpg'
import img14 from '../img/img14.jpg'
import MiddleSection from './MiddleSection'
import {Carousel} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function TopSection() {
  return (
      <div className="top-section" >
<div className='carousel'>
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"style={{width:"600px"}}
      src={img16}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <h5 style ={{color: "black"}}> </h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img22}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img14}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>


<div class="blockentreimages">
<section class="story-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="story-text">
                                <p>“Even if you don’t have a ready sketch of what you want – we will help you to get the result you dreamed of.”</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="story-author">
                                <img className = "profilimg"src="https://scontent.xx.fbcdn.net/v/t1.15752-9/273692716_1132385904191760_5017312497319602718_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_ohc=8iWOVE9-A30AX8lMyq8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJTK4egdWgCIEtIAF39qdur2gnRQ7A41J4x-ZnsHRYA9w&oe=6243EF11" style={{width: "100px , height: 100px"}}   alt=""/>
                                <div class="story-content">
                                    <h5 className="story-title">Leyla Njim</h5>
                                    <p className="story-description">Fondateur d'entreprise</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        <MiddleSection/>

              
    
           <div className="icon">
             <div class="flex-row ">
                <div class="col ">
                    <div class="title-2">1 </div>
                    <p style={{fontSize: "20px"}}>Une prise de rendez-vous et prise de côte</p>
                </div>

                <div class="col ">
                <i class="fa fa-chevron-circle-right"></i>
                </div>

                <div class="col">
                    <div class="title-2">2 </div>
                    <p style={{fontSize: "20px"}}>Une proposition de conception 3D modifiable, shopping list</p>
                </div>

                <div class="col ">
               <i class="fa fa-chevron-circle-right"></i>
                </div>
    

                <div class="col">
                    <div class="title-2">3 </div>
                    <p style={{fontSize: "20px"}}>Devis entrepreneurs</p>
                </div>

                <div class="col ">
               <i class="fa fa-chevron-circle-right"></i>
                </div>

                <div class="col ">
                    <div class="title-2">4 </div>
                    <p style={{fontSize: "20px"}}>Suivi de chantier</p>
                </div>
            </div >
            </div>

            <div className="col-paragh" style={{textAlign: 'center', backgroundColor:'black', color: 'white'}}>
            <p>Votre nid douillet est alors à votre disposition ! N'hésitez plus
            <br></br>
             <Link to="/Contact">contactez-nous</Link>.</p>
            </div>


<div id="bloc-1" className="section-1">  
    <div >
        <h1 style={{textAlign: 'center'}}>Architecte d’intérieur à Sousse</h1>

        <p className='sousse'>Nous sommes une équipe composée d'architectes, 
           décorateurs et entrepreneurs qui pouvons faire de votre rêve une réalité 
            ! Notre principe ? Réaliser vos projets d'aménagement et décoration à Sousse en procédant à plusieurs étapes.
            Vous serez enfin satisfait de l’aménagement et de la décoration de votre nid douillet!
            Qu’attendez-vous pour nous contacter ? En effet,
            nous vous garantissons que notre intervention sera le synonyme d’un changement rapide et positif.</p>   
    </div>

    

    </div>
    


</div>

  )
}

export default TopSection