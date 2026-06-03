import { useState, useEffect } from 'react';
import '../styles/Navbar.css'

function Navbar() {
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeRect = homeSection.getBoundingClientRect(); //mesure la position de la section Home sur l’écran.
        // Si on est dans la section Home (haut de l'écran)
        setIsHome(homeRect.top <= 0 && homeRect.bottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div id="navbar" className={isHome ? 'transparent' : ''}>

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