import {Component} from 'react'
import ProjectsList from '../projectslist'

const MyProjects = [{id: 0, projectName: 'Project1', description: 'A project description is a document that outlines a project key details, objectives, and scope. It provides a roadmap for stakeholders involved in the project, ensuring a common understanding of its purpose and guiding successful execution.', imgUrl: 'https://www.reliancedigital.in/wp-content/uploads/2023/07/Oppo_Reno_10_5g_Cover.jpg'},
{id: 1, projectName: 'Project2', description: 'A project description is a document that outlines a projects key details, objectives, and scope. It provides a roadmap for stakeholders involved in the project, ensuring a common understanding of its purpose and guiding successful execution.', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSLLn0JZjOx0iNTWc2w6SmSxAlqqsIDe2zIw&usqp=CAU'},
{id: 2, projectName: 'Project3', description: 'A project description is a document that outlines a projects key details, objectives, and scope. It provides a roadmap for stakeholders involved in the project, ensuring a common understanding of its purpose and guiding successful execution.', imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqk2PckhyOcKqpyEsNbNfPuw1r_T0hWccoLg&usqp=CAU'}]



class Addprojects extends Component{

    state = {myProjects: MyProjects, id: '', projectName: '', projectLink:'', description:''}

    onAddingProjectName = (event) => {
        this.setState({projectName: event.target.value})

    }

    onAddingProjectLink = (event) => {
        this.setState({projectLink: event.target.value})
    }

    onAddingProjectDesc = (event) => {
        this.setState({description: event.target.value})
    }

    onAddProject = () => {
        const {projectName, description, projectLink, myProjects } = this.state
        const newItem = {id: myProjects.length, projectName: projectName, description: description, projectLink: projectLink }
        console.log(myProjects)
        this.setState({myProjects: [...myProjects, newItem]})
    }


    render(){
         
        const {myProjects} = this.state
        const {projectName, description, projectLink} = myProjects

        return(
<div className='add-projects'> 
<h1 className='heading'> Add Project </h1>

<div  id='projects'>
<div className='labels'> 
<label htmlFor='name'> Project Name  </label>
<input id='name' type='text' onChange={this.onAddingProjectName} value={projectName}/>
</div>
<div className='labels'> 
<label htmlFor='link'> Project Link  </label>
<input id='link' type='text' onChange={this.onAddingProjectLink} value={projectLink}/>
</div>
<div className='labels'> 
<label htmlFor='desp'> Description </label>
<textarea id='desp' onChange={this.onAddingProjectDesc} value={description} rows='10' cols='100'> Write your project description </textarea>
 
</div>
</div>

<div className='add-btn-cont'> 
<button type='button' className='projects-button' onClick={this.onAddProject}> Add </button>
</div>
<h1 className='projects-head'> Projects </h1>
{myProjects.map((eachItem) => <ProjectsList ProjectsListItems={eachItem} key={eachItem.id}/>)}

</div>

        )
    }
}
 

export default Addprojects