import '../styles/Navbar.css'

function Navbar() {
  
  return (
    <div id="navbar">

      <h1 className="logo">Satou's world</h1>

      <div id="links">

        <a href="#home" className='link'>Home</a>
        <a href="#about" className='link'>About</a>
        <a href="#projects" className='link'>Projects</a>
        <a href="#skills" className='link'>Skills</a>
        <a href="#contact" className='link'>Contact</a>

      </div>
    </div>
  );
}

export default Navbar;