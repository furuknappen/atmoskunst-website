import { Link } from "react-router";
import '../styles/header.css'
import Logo from '../assets/atmos-egen.svg?react'

function Header() {
  return <>
  <header className="headerDiv">
    <Link to="/" >
        <Logo className="logo" alt="Atmos Kunst logo"/>
    </Link>
    
{/* <nav>
 <Link to="/designers">Våre designere</Link>
 <Link to="/about-us">About us</Link>
</nav> */}

  </header>
</>
}

export default Header