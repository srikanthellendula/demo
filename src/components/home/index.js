import React from 'react'
 import './index.css'

const Home = () => <div className='bg-cont'>
   <div class='header'>
   <p> Madelyn Torff</p>
   <div>
   <button className='top-buttons' type='button'> About </button>
  <button className='top-buttons' type='button'> Projects </button>
  <button className='top-buttons' type='button'> Contacts </button> 
  </div>
  
   </div>
  <div className='left-content'> 
    <p className='ux-design'> UI/UX Designer </p>
    <h1> Hello,  my name is Madelyn Torff </h1>
    <p> Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
    
    <div> 
    <button type='button' className='projects-button'> Projects </button> 
    <button type='button' className='linkdin-button'> LinkdIn </button>
    </div>
    </div>
  
  

 

</div>

export default Home