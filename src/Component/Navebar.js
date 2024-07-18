import React from 'react'
import logo from '../asset/FoodieLogo.png';
import MapImg from '../asset/Map-UI.png.webp'; 
import Iphone from '../asset/iphone13-Layout.png';


function Navebar() {
  return (
    <div>
      <img src={MapImg} alt='mapImg' className='MapImg'/>

     <nav className='nav'>

       <img src={logo} alt='Foodie' className='logo' /> 
        
        <button className='navbtn' >Join the Waitlist</button>
       
     </nav>
     <section className='foodie' >
      <div className='' >
        <img src={Iphone} alt="iphone" className='iphone'/>
      </div> 

      <div className='welcome' >
      <img src={logo} alt='Foodie' className='Minlogo'/>                
      <div className='para'>
      <h1>Welcome to Foodie</h1>
      <p>At foodie,we redefine convenience with our seamless</p>
      <p>food delivery service. Whether you"re craving the </p>
      <p>flavors of home or exploring new culinary delights,</p>
      <p>foodie bring it all to you doorstep. From hearty</p>
      <p>breakfast to gourmet dinner and everything in</p>
      <p>between, our curated menu caters to every palate and</p>
      <p>Preference</p>
       </div>
      <button className='join' >Join the Waitlist</button>
      </div>
     </section>
     </div>
  )
}

export default Navebar


