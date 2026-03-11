import { NavLink } from "react-router";
import '../styles/header.css'
import Logo from '../assets/atmos-egen.svg?react'

function Header() {
  return <>
  <header className="headerDiv">
    <NavLink to="/" >
        <Logo className="logo" alt="Atmos Kunst logo"/>
    </NavLink>


    
<nav className="headerNav">
 <NavLink to="/designers">Møt Designerne</NavLink>
  {/* <NavLink to="/produkt-galleri">Produkt Galleri</  NavLink> */}
 {/* <Link to="/about-us">Om Atmos Kunst</Link> */}
  {/* <Link to="/contact">Kontakt</Link> */}
</nav>
 </header>
 
</>
}

export default Header