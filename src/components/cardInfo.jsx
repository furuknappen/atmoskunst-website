import '../styles/cardInfo.css'
import ReadMoreBtn from "../components/readMoreBtn.jsx"
import Bilde from "../assets/products/camilla.jpg"

function CardInfo() {
    return <>
    
    <div className='cardInfoDesigners'>


        <div className="imgDiv">
          <img className="displayImg" src={Bilde} alt=""></img>
        </div>
        <h3> Furuknappen</h3>
        <p>Keramikk Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>

       <ReadMoreBtn />
        


    </div>
    
    </>

}

export default CardInfo