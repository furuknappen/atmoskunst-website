import Helene from '../assets/products/helene.jpg';
import Sunniva from '../assets/products/sunniva.jpg';
import Minna from '../assets/products/minna.jpg';
import Camilla from '../assets/products/camilla.jpg';
import Wanda from '../assets/products/wanda.png';
import Ingrid from '../assets/products/ingrid.jpg';
import Indre from '../assets/products/indre.jpg';
import Laura from '../assets/products/laura.jpg';
import '../styles/pictureDisplay.css'


function pictureDisplay() {
  return <>
    <section className="displayContainer">
      <h2 className='light'>Our products</h2>
      <div className="imgContainer">
        <div className="imgDiv">
          <img className="displayImg" src={Helene} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Sunniva} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Minna} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Camilla} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Wanda} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Ingrid} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Indre} alt=""></img>
        </div>
        <div className="imgDiv">
          <img className="displayImg" src={Laura} alt=""></img>
        </div>
      </div>
    </section>


  </>




}

export default pictureDisplay