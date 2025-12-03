import { Link } from "react-router";
// import CustomMap from "../../CustomMap.js"
import React from "react";
import MapComponent from "../components/MapComponent.jsx";
import LocationPic from "../assets/google-atmos.png"
import HeroSection from "../components/heroSection.jsx";
import PictureDisplay from "../components/pictureDisplay.jsx";
import OpeningHours from "../components/openingHours.jsx";
import HeroGrid from "../components/heroGrid.jsx";
import Events from "../components/eventSection.jsx";
import LocationSection from "../components/locationSection.jsx";
import ChristmasOpeningHours from "../components/ChristmasOpeningHours.jsx";

import '../styles/home.css'


function Home() {
  return (<>
    <main className="homeMain">
      <HeroSection />

      <Events />



      <HeroGrid />
      {/* <OpeningHours /> */}
      <section className="textDiv last">

        <h1 className="dark ">Velkommen!</h1>
        <p className="text dark "> Atmos kunst er en ny butikk som har åpnet i Trondheim! Butikken drives av håndverkere og kunstnere som har gått sammen for å selge produktene sine sammen på ett sted. Her vinner du alt du vil trenge av julegaver!</p>
      </section>
<ChristmasOpeningHours />
      <LocationSection />

      {/* <section className="textDiv locationSection last">
     <div className="location ">
        <h2 id="hvor">Hvor finner du oss?</h2>
        <p>Du finner oss i Thomas Angells gt. 27 gate, i det gamle lokalet til M. Sommer, ved siden av Flying tiger. </p>
        <MapComponent />
      </div>
     </section> */}



      <PictureDisplay />



      {/* <h1>
        Vi åpner 1. November!
      </h1>
      <p>Bli med på åpningen av Atmos kunstkollektiv i Thomas Angells gt. 27 gate, 1. november kl. 10:00.</p>
      <p>Kom innom for en koselig atmosfære med stor variasjon av håndlagde produkter fra lokale kunstnere!</p> */}
      {/* <Link to="/designers">designers</Link> */}

      <p className="info text-center">Denne nettsiden er under utvikling :) </p>
    </main>
  </>
  )
}

export default Home
