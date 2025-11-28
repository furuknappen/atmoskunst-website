import Bilde from "../assets/bilde.jpg"
import '../styles/designerSection.css'


function DesignerSection({ title, text, images }) {
  return <>
    <section className="designerSection">
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="imageSection">
        {images.map(({src, alt}) =>
          <img
            src={"/images/" + src}
            alt={alt}></img>
        )}
      </div>
    </section>



  </>

}
export default DesignerSection