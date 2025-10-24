import Bilde from "../assets/bilde.jpg"
import '../styles/designerSection.css'


function DesignerSection() {
  return <>
    <section className="designerSection">
      <h2>
        Furuknappen Keramikk
      </h2>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto tenetur optio earum quasi sint enim mollitia    quod praesentium modi, nulla magni reiciendis in iure eos rerum quis temporibus illum officia.
      </p>

      <div className="imageSection">
        <img src={Bilde} ></img>
        <img src={Bilde} ></img>
        <img src={Bilde} ></img>
      </div>
    </section>



  </>

}
export default DesignerSection