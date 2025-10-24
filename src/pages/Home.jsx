import { Link } from "react-router";
// import CustomMap from "../../CustomMap.js"
import React from "react";
import MapComponent from "../components/MapComponent.jsx";

import '../styles/home.css'

function Home() {
  return (<>
    <main className="homeMain">
      <h1>
        Vi åpner <br></br>1. November!
      </h1>
      <p>Bli med på åpningen av Atmos kunstkollektiv i Thomas Angells gt. 27 gate, 1. november kl. 10:00.</p>
      <p>Kom innom for en koselig atmosfære med stor variasjon av håndlagde produkter fra lokale kunstnere!</p>
      {/* <Link to="/designers">designers</Link> */}
      <div>
        <h2>Hvor finner du oss?</h2>
        <MapComponent />

      </div>

      <div className="Åpningsider">
        <h2>Åpningstider</h2>
        <p>
          Mandag-lørdag: 10:00-18:00</p>

      </div>


      <p>Denne nettsiden er under utvikling :) </p>
    </main>
  </>
  )
}

export default Home
