import '../styles/location.css'
import MapComponent from "./MapComponent.jsx";

function LocationSection() {
return <>
 <section className="textDiv locationSection last">
     <div className="location">
        <h2 id="hvor">Hvor finner du oss?</h2>
        <p>Du finner oss i Thomas Angells gt. 27 gate, i det gamle lokalet til M. Sommer, ved siden av Flying tiger. </p>
        <MapComponent />
      </div>
     </section>

</>
}

export default LocationSection;