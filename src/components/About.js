import "../styles/About.css"
//import me from "../assets/images/me.jpeg"

function About() {
  return (
    <div id="about" >
      <div className="allabout">

        <h1 className="aboutme" data-aos="fade-up">About me</h1>

        <div className="paragraph" data-aos="fade-up" data-aos-delay="300">
          <p data-aos="fade-up">Second-year student in the Computer Science DUT program at the Polytechnic School of Dakar.</p>
          <p data-aos="fade-up">I am passionate about technology and continuously exploring the world of computer science.</p>
          <p data-aos="fade-up">My academic journey has helped me build strong foundations in programming and problem-solving.</p>
          <p data-aos="fade-up">I am currently looking to join a dynamic and innovative organization.</p>
          <p data-aos="fade-up">My goal is to gain real-world professional experience in a collaborative environment.</p>
          <p data-aos="fade-up">I want to deepen my skills in software development and modern programming practices.</p>
          <p data-aos="fade-up">I am particularly interested in machine learning and artificial intelligence.</p>
          <p data-aos="fade-up">I am also developing my knowledge in cybersecurity to better understand system protection.</p>
          <p data-aos="fade-up">I enjoy working on practical projects that help me apply what I learn .</p>
          <p data-aos="fade-up">I am highly motivated to grow, improve, and contribute to impactful technological solutions.</p>
        </div>
        
      </div>
      
     {/* <div className="photo">

        <img className="maphoto" src={me} alt="maphoto" data-aos="flip-right" data-aos-delay="400"/>

      </div> */}
    
    </div>
  )
}

export default About