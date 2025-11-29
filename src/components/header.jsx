import { Link } from "react-router";
import '../styles/header.css'
import Logo from '../assets/atmos-egen.svg?react'

function Header() {
  return <>
  <header className="headerDiv">
    <Link to="/" >
        <Logo className="logo" alt="Atmos Kunst logo"/>
    </Link>


    
<nav className="headerNav">
 {/* <Link to="/designers">Møt oss</Link> */}
 {/* <Link to="/about-us">Om Atmos Kunst</Link> */}
  {/* <Link to="/contact">Kontakt</Link> */}
</nav>

  </header>
</>
}

export default Header