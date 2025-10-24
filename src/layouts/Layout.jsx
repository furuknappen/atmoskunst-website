import { Outlet } from "react-router"
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

function Layout() {
  return (<>
  <Header />
    <h1>Layout</h1>
   
  <Outlet /> 
  <Footer />
    
   </>
  )
}

export default Layout