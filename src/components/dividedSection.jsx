
import info from "../data/text.json"
import "../styles/dividedSection.css"

function DividedPictureAndText() {
    return <>
        <section className="dividedContainer">

            <div className="imgDiv">
                <img src={info.image.src} alt={info.image.alt} />
            </div>
            <div className="textDiv">
                <h2> {info.h1ForDividedSection}
                </h2>
                <p>{info.textForDividedSection}
                </p>
            </div>


        </section>
        



    </>
}


export default DividedPictureAndText 