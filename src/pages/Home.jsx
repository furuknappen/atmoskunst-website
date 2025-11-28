import { Link } from "react-router";
// import CustomMap from "../../CustomMap.js"
import React from "react";
import MapComponent from "../components/MapComponent.jsx";
import LocationPic from "../assets/google-atmos.png"
import HeroSection from "../components/heroSection.jsx";
import PictureDisplay from "../components/pictureDisplay.jsx";
import OpeningHours from "../components/openingHours.jsx";
import HeroGrid from "../components/heroGrid.jsx";
import '../styles/home.css'


function Home() {
  return (<>
    <main className="homeMain"> 
      <HeroSection />
      <HeroGrid />
      {/* <OpeningHours /> */}
      <section class="textDiv">
      <h1 className='dark '>Velkommen!</h1>
      <p className="text dark margin-btm"> Atmos kunst er en ny butikk som har åpnet i Trondheim! Butikken drives av håndverkere og kunstnere som har gått sammen for å kunne selge produktene sine sammen på ett sted. Her vinner du alt du vil trenge av julegaver!</p>
     </section>

     <section class="textDiv">
     <div className="location ">
        <h2 >Hvor finner du oss?</h2>
        <p>Du finner oss i Thomas Angells gt. 27 gate, i det gamle lokalet til M. Sommer, ved siden av Flying tiger. </p>
        <MapComponent />
      </div>
     </section>

     <Section title="Velkommen!" text="djasjdasld">
        <MapComponent />
     </Section>
    


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
