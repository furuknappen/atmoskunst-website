import { Link } from "react-router";
// import CustomMap from "../../CustomMap.js"
import React from "react";
import MapComponent from "../components/MapComponent.jsx";
import LocationPic from "../assets/google-atmos.png"

import '../styles/home.css'

function Home() {
  return (<>
    <main className="homeMain">
      <h1>
        Vi åpner 1. November!
      </h1>
      <p>Bli med på åpningen av Atmos kunstkollektiv i Thomas Angells gt. 27 gate, 1. november kl. 10:00.</p>
      <p>Kom innom for en koselig atmosfære med stor variasjon av håndlagde produkter fra lokale kunstnere!</p>
      {/* <Link to="/designers">designers</Link> */}
      
      <div className="Åpningsider">
        <h2>Åpningstider etter 1. November</h2>
        <p>
          Mandag-lørdag: 10:00-18:00</p>

      </div>
<div>
        <h2>Hvor finner du oss?</h2>
        <p>Du finner oss i den gamle butikken til M. Sommer, ved siden av Flying tiger. </p>
        <MapComponent />
{/* <a href='/https://www.google.com/maps/place/Thomas+Angells+gate+27,+7011+Trondheim/@63.4326632,10.3945688,18z/data=!4m5!3m4!1s0x466d319b6ef1b1fd:0x72caf4761f025ce!8m2!3d63.4324394!4d10.39482!5m2!1e3!1e4?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D'> 
<img className="locationPic" src={LocationPic}/>
</a > */}
      </div>

      <p>Denne nettsiden er under utvikling :) </p>
    </main>
  </>
  )
}

export default Home
