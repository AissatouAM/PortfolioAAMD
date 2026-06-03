import '../styles/Home.css'

function Home(){
  return(
    <div id="home" data-aos="fade-down" data-aos-delay="300">

      <button className="available">Available for new projects</button>

      <h1 data-aos="zoom-in" >Hey !, I am <span className='name'>Aissatou</span></h1>

      <h2>Full-Stack Developper</h2>

      <div data-aos="fade-right" data-aos-delay="300">
        <p>I craft beautiful, functional digital experiences that bring ideas to life.</p>
        <p>Specializing in modern web development and user-centered design.</p>
      </div>

      <div className='bottombuttons'>
        <button className='bottombutton1'>View my work</button>
        <button className='bottombutton2'>Get in Touch</button>
      </div>

    </div>
  )
}

export default Home