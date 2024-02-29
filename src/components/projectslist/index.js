import './index.css'

const ProjectsList = (props) => {
    const {ProjectsListItems} = props
    const {id} = ProjectsListItems
    
    const isEven = () => {
        if (id % 2 === 0 ) {
            return true
        }
        return false
    }
    
     
    if (isEven()){
        return (
        <div className="project-list-items">        
        <div className='project-title'>
             <h1> {ProjectsListItems.projectName} </h1>             
            <p> {ProjectsListItems.description} </p>
            <button className='view-project' type='button'> View Project </button> 
        </div>
        <div className='img-cont'> 
            <img className='img-pro' alt='img' src={ProjectsListItems.imgUrl}/> 
        </div>        
        </div>
        )

    }
else{

    return (
    <div className="project-list-items"> 

    <div className='img-cont'> 
        <img className='img-pro' alt='img' src={ProjectsListItems.imgUrl}/> 
    </div>     
         
    <div className='project-title'> 
        <h1> {ProjectsListItems.projectName} </h1>
        <p> {ProjectsListItems.description} </p>
        <button className='view-project' type='button'> View Project </button> 
    </div>
         
    </div>
    )
    

}}


export default ProjectsList