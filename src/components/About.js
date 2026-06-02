import "../styles/About.css"
import me from "../assets/images/me.jpeg"

function About() {
  return (
    <div id="about">
      <div className="allabout">
        <h1 className="aboutme">About me</h1>

        <div className="paragraph">
          <p>Second-year student in the computer science DUT program</p>
          <p>At Polytechnic School of Dakar,</p>
          <p>I'm looking to join a dynamic organization</p>
          <p>Where I can gain professional experience,</p>
          <p>deepen my skills in programming, machine learning and cybersecurity</p>
          <p>And actively contribute to real-world projects.</p>
        </div>
      </div>
      
        <img className="maphoto" src={me} alt="maphoto" />
    
    </div>
  )
}

export default About