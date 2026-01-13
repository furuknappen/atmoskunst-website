import '../styles/designerSection.css'


function DesignerCard({ title, text, images, soMe1, soMe2 }) {
  return <>
    <section className="designerSection" >
      <div className='contentContainer'>
        <div className="textDivDesigners">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className='soMeContainer'>
            <p className='soMeLink'>{soMe1}</p>
            <p className='soMeLink'> {soMe2}</p>

          </div>

        </div>

        <div className="imageSection">
          {images.map(({ src, alt }) =>
            <img
              src={"/images/designersImg/" + src}
              alt={alt}></img>
          )}
        </div></div>
    </section>

  </>

}
export default DesignerCard