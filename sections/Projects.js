import React from 'react'
import demoimg from "../assets/images/streetlight.png"
import Image from 'next/image'
import { projectDetails } from "@/assets/data/dummydata"
 const Projectcard =({clientname,projectarray})=>{
  return(
  <div style={{textAlign:"center"}}>
  <div>
     <h4 style={{color:'black',fontSize:"2rem",marginTop:"2rem",marginBottom:"2rem"}}>
        {clientname}
      </h4>
  </div>
  <div  style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",textAlign:"center"}}>
  {
    projectarray.map( currentproject =>{
     return (
      <div className="marketplace" style={{width:"75%",height:"50vh",backgroundColor:"white",border:"1px solid black",borderRadius:"4px",marginBottom:"15%",marginLeft:"15%",}}>
    <div>
      <img src={currentproject.projectimg} width="50%" height="210px"/>
    </div>
    <div>
      <h4 style={{color:"black"}}>{currentproject.projecttitle}</h4>
      <p style={{color:"black",fontSize:"0.9rem"}}>{currentproject.projectdescription}</p>
    </div>
    
  </div>
     )
    })
  }
  
  
 
  </div>
  </div>
  )
 }
const Projects = () => {
  return (
    <div >
    <div style={{height:"7vh",textAlign:"center",color:"black",fontSize:"30px",marginTop:"5%"}}>Our Projects</div>
    <div >
    {
      projectDetails.map(project=>{
        return(
        <Projectcard clientname={project.client} projectarray={project.theirprojects}/>
        )
      })
    }
   
    </div>
    </div>
  )
}

export default Projects