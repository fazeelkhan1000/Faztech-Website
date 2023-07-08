import React, {useState} from 'react'
import circleImg from "../assets/cover-images/min_circle.png"
import projectsData from "../ProjectsData";

export const ProjectsSection = () => {
    const [projectData] = useState(projectsData)
    const [projectTitle, setProjectTitle] = useState(projectData[4]?.title)
    const [projectDesc, setProjectDesc] = useState(projectData[4]?.description)

    const handleMouseOver = (e,index) => {
        setProjectTitle(projectData[index]?.title)
        setProjectDesc(projectData[index]?.description)
    }
    const handleMouseLeave = () => {
        setProjectTitle(projectData[4]?.title)
        setProjectDesc(projectData[4]?.description)
    }

  return (
    <>
    <section>
        <div className='projects-div'>
            <div className='flex-div margin-50 mw-1250'>
                <div className='left-division'>
                    <div className='main-projects-bg'>
                        <img width="560" src={circleImg} alt="circle-bg" />
                        {projectData.map((project, index)=> {
                            return (
                                <img className={`project-images image-${index}`} key={index} src={project.image} alt={project.title} 
                                onMouseOver={(e) => handleMouseOver(e,index)} onMouseLeave={handleMouseLeave} />
                            )
                        })}

                    </div>
                </div>
                <div className='right-division'>
                    <span style={{textAlign: "right"}}><h1 className='featured-text'>Featured Projects</h1></span>
                    <div className='project-desc-div'>
                    <h2 className='project-heading'>
                        {projectTitle}
                    </h2>
                    <span className='project-desc'>
                        {projectDesc}
                    </span>
                    <button style={{maxWidth: "100px", margin: "20px 0px"}}>Portfolio</button>
                    </div>

                </div>

            </div>

        </div>
    </section>
    </>
  )
}
