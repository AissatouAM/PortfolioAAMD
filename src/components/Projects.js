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
      "description" : "Site d'actualite concu avec du HTML/CSS, Javascript, PHP et MySQL pour la base de donnees. Ce site permet a chaque visiteur de voir les articles publies. Un uilisateur inscrit a le droit de publier un article dans une categorie, de le modifier et de suivre son evoltion. L'administrateur a lui, acces au tableau de bord afin de gerer tout individu ayant acces au site, mais avec certains limites d'acces" 
    },

    {
      "id" : 2,
      "title" : "Mobile Money",
      "description" : "Application sur console permettant de creer un compte client ou marchand, de deposer et de retirer de l'argent. Des transfert d'argents sont aussi possibles. Un utilisateur peut consulter son compte et faire des paiements marchands."
    },

    {
      "id" : 3,
      "title" : "Quran-Tracer",
      "description" : "Site web qui consiste a suivre son evolution d'apprentissage de coran. Une fois qu'un verset est appris, l'utilisateur coche comme su et verra la barre de progression de la sourate. De meme, lorsqu'une sourate est sue, l'utilisateur l'enregistre et verra ainsi son evolution dans l'apprentissage du coran."
    },

    {
      "id" : 4,
      "title" : "Site-diner",
      "description" : "Site de diner pour le departement Genie Informatique de l'Ecole Superieure Polytechnique. Concu pour que les etudiants puissent s'inscrire et ensuite candidater en tant que Roi ou Reine du bal. Tout etudiant ayant un compte et souhaitant voter devra forcement voter poour un Roi et une Reine, avec la possibilite d'annuler son vote, de supprimer son compte et eventuellement sa candidature si souhaite."
    }
  ]
  return(
    <div id="projects">
      <h1 className="title">My Projects</h1>
      <div className="projectinfos">
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
                <button className="viewproject">Voir sur GitHub</button>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  )
}

export default Projects