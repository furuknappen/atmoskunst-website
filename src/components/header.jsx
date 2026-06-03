import { useState } from "react";
import { NavLink } from "react-router";
import '../styles/header.css'
import Logo from '../assets/atmos-egen.svg?react'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="headerDiv">
      <NavLink to="/" onClick={closeMenu}>
        <Logo className="logo" role="img" aria-label="Atmos Kunst logo" />
      </NavLink>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
      >
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`} />
      </button>

      <nav className={`headerNav ${isOpen ? 'nav-open' : ''}`}>
        <NavLink to="/designers" onClick={closeMenu}>Møt Designerne</NavLink>
        <NavLink to="/produkt-galleri" onClick={closeMenu}>Produkt Galleri</NavLink>
        <NavLink to="/medlem" onClick={closeMenu}>Bli medlem</NavLink>
      </nav>
    </header>
  );
}

export default Header;

// import { NavLink } from "react-router";
// import '../styles/header.css'
// import Logo from '../assets/atmos-egen.svg?react'

// function Header() {
//   return <>
//   <header className="headerDiv">
//     <NavLink to="/" >
//         <Logo className="logo" alt="Atmos Kunst logo"/>
//     </NavLink>


    
// <nav className="headerNav">
//  <NavLink to="/designers">Møt Designerne</NavLink>
//   <NavLink to="/produkt-galleri">Produkt Galleri</  NavLink>
//  {/* <Link to="/about-us">Om Atmos Kunst</Link> */}
//   {/* <Link to="/contact">Kontakt</Link> */}
//     <NavLink to="/medlem">Bli medlem</NavLink>
// </nav>
//  </header>
 
// </>
// }

// export default Header