import { Outlet } from "react-router"
import Header from '../components/header.jsx'

function Layout() {
  return (<>
  <Header />
    <h1>Layout</h1>
   
  <Outlet /> </>
  )
}

export default Layout