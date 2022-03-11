import React from 'react'
import img3 from './img/img3.jpg'
import img7 from './img/img7.jpg'
import img9 from './img/img9.jpg'
import img13 from './img/img13.jpg'
import img6 from './img/img6.jpg'
import img12 from './img/img12.jpg'


function BlocImage() {
  return (
    <div class="cards-list">
     <div class="card 1">
         <div class="card_image"> <img src={img3} /> </div>
  
</div>

  <div class="card 2">
  <div class="card_image">
    <img src={img7} /> 
    </div>
  
</div>

<div class="card 3">
  <div class="card_image">
  <img src={img9} /> 
  </div>
</div>


<div class="card 3">
  <div class="card_image">
  <img src={img13} /> 
  </div>
</div>
<div class="card 3">
  <div class="card_image">
  <img src={img6} /> 
  </div>
</div>
<div class="card 3">
  <div class="card_image">
  <img src={img12} /> 
  </div>
</div>
</div>
  )
}

export default BlocImage