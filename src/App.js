import AnchorLink from 'react-anchor-link-smooth-scroll'
import Addprojects from './components/addprojects'
import Contact from './components/contact'
import './App.css'



const App = () => 
<div>  

<div className='bg-cont'>
   <div class='header'>
   <p> Madelyn Torff</p>
   <div>
    <AnchorLink href='#about'> <button className='top-buttons' type='button'> About </button> </AnchorLink>
    <AnchorLink href='#projects'> <button className='top-buttons' type='button'> Projects </button> </AnchorLink>
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
     
   <div id='projects'> <Addprojects/>  </div>   
    <div id='about'> <Contact/></div>


 </div>

export default App;
