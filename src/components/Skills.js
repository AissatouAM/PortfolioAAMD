import "../styles/Skills.css"

function Skills(){

  const skills = [
    {
      type: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 65 },
        { name: "React", level: 70 }
      ]
    },

    {
      type: "Backend",
      skills: [
        { name: "PHP", level: 55 },
        { name: "JAVA", level: 55 }
      ]
    },

    {
      type: "Base de donnees",
      skills: [
        { name: "MySQL", level: 60 }
      ]
    }
  ];

  return (
    <div id="skills" data-aos="fade-down">
      <h1 className="title">My Skills</h1>

      <div className="skillsintro" >
        <p data-aos="fade-up">These are the technologies and tools I use to bring ideas to life through code.</p>
        <p data-aos="fade-up">From frontend development to programming fundamentals, each skill represents a step in my growth as a developer.</p>
        <p data-aos="fade-up">I am constantly learning and evolving to stay up to date with modern technologies.</p>
      </div>

      <div className="skillinfos" data-aos="fade-up" data-aos-delay="300">
        {skills.map((category) => (
          <div key={category.type} className="skill-category">
            <h2 className="skilltype">{category.type}</h2>

            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills