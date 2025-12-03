import Bilde from "../assets/bilde.jpg"
import '../styles/designerSection.css'


function DesignerCard({ title, text, images }) {
  return <>
    <section className="designerSection">
      <div className="textDivDesigners">
      <h2>{title}</h2>
      <p>{text}</p></div>
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
export default DesignerCard