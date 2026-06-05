import { useState } from "react";
import "../styles/Projects.css"

function Projects(){
  const [expandedId, setExpandedId] = useState(null)
  const toggleDescription = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }
  const projects = [
    {
      "id" : 1,
      "title" : "FlashInfo", 
      "description": "A news website built using HTML/CSS, JavaScript, PHP, and MySQL for the database. The site allows any visitor to view published articles. Registered users can publish articles in a category, edit them, and track their progress. The administrator has access to a dashboard to manage all users with access to the site, with certain permission limitations." 
    },

    {
      "id" : 2,
      "title" : "Mobile Money",
      "description": "A console-based application that allows users to create either a customer or merchant account, deposit and withdraw money, and perform money transfers. Users can also view their account details and make merchant payments."
    },

    {
      "id" : 3,
      "title" : "Quran-Tracer",
      "description": "A website designed to track a user's progress in learning the Quran. Once a verse is memorized, the user can mark it as learned and see the progress bar for that Surah update. Similarly, when a Surah is completed, the user can mark it as learned, allowing them to monitor their overall progress in Quran memorization."
    },

    {
      "id" : 4,
      "title" : "Site-diner",
      "description": "A dinner event website for the Computer Engineering department at the Polytechnic School. It is designed to allow students to register and apply as candidates for King or Queen of the ball. Any student with an account who wishes to vote must vote for both a King and a Queen. Users also have the ability to cancel their vote, delete their account, and withdraw their candidacy if they choose to do so."
    }
  ]
  return(
    <div id="projects" >
      <h1 className="title" data-aos="fade-up">My Projects</h1>
    
      <div className="projectintro" >
        <p data-aos="fade-up">Here are some of the projects I have worked on during my learning journey in web development.</p>
        <p data-aos="fade-up">They reflect my progress in programming and my ability to turn ideas into real applications.</p>
        <p data-aos="fade-up">Each project is a step forward in my journey as a future software developer.</p>
      </div>

      <div className="projectinfos" data-aos="fade-up" data-aos-delay="300">
        {projects.map((project) => {
          return (
            <div key={project.id} className={`project ${expandedId === project.id ? 'expanded' : ''}`}>
              <div className="titles">
                <h2 className="title">{project.title}</h2>
              </div>
              <p className={`description ${expandedId === project.id ? 'expanded' :''}`}
                onClick={() => toggleDescription(project.id)}
              >
                  {project.description}
              </p>
              <div className="buttons">
                <button className="viewproject">View on GitHub</button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}

export default Projects