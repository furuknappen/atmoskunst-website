import { Link } from "react-router";

function Header() {
  return <>
  <div >
  <p>header</p>
  
<nav>
 <Link to="/designers">Våre designere</Link>
 <Link to="/about-us">About us</Link>

</nav>



  </div>
</>}

export default Header