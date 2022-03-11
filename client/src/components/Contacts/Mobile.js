import React from 'react'
import {ButtonToolbar,Button,ButtonGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Mobile() {
  return (
    <div class="fold"  >
    <div class="container">
                 
            <div class="flex-row l-justify-content-flex-end l-align-items-center">
                <div class="col">
                    <div class="flex-row m-justify-content-center l-justify-content-flex-end m-align-items-center center-align">
                                                    <div class="col">
                                <div class="flow-text bold">
                                    <a href="tel:+21655696949" class="tel">55 69 69 49 </a>
                                </div>
                            </div>
            <ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="me-2" aria-label="First group">

  <Link to="/Devis"><Button>Je demande un devis gratuit</Button></Link>.
    
  </ButtonGroup>
  </ButtonToolbar>
                    </div>
                </div>
            </div>
            </div>
</div>
  )
}

export default Mobile