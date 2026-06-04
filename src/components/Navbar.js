import { useState, useEffect } from 'react';
import '../styles/Navbar.css'

function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const closeMenu = () => setMenuOpen(false);
  
  return (
    <div id="navbar" className={isHome ? 'transparent' : ''}>

      <h1 className="logo">Satou's world</h1>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div id="links" className={menuOpen ? 'active' : ''}>

        <a href="#home" className='link' onClick={closeMenu}>Home</a>
        <a href="#about" className='link' onClick={closeMenu}>About</a>
        <a href="#projects" className='link' onClick={closeMenu}>Projects</a>
        <a href="#skills" className='link' onClick={closeMenu}>Skills</a>
        <a href="#contact" className='link' onClick={closeMenu}>Contact</a>

      </div>
    </div>
  );
}

export default Navbar;