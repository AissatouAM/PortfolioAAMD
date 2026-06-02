import "../styles/Skills.css"

function Skills(){

  const skills = [
    {
      name: "HTML",
      level: 90
    },

    {
      name: "CSS",
      level: 75
    },

    {
      name: "JavaScript",
      level: 65
    },

    {
      name: "React",
      level: 70
    },

    {
      name: "PHP",
      level: 55
    },

    {
      name: "JAVA", 
      level: 55
    },

    {
      name: "MySQL",
      level: 60
    }
  ];

  return (
    <div id="skills">

      <h1 className="myskills">My Skills</h1>

      {skills.map((skill) => (
      <div className="skill" key={skill.name}>
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
  )
}

export default Skills