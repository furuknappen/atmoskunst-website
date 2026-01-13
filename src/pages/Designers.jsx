import DesignerCard from '../components/designerSection.jsx'
import '../styles/designers.css'
import designers from "../data/designers.json"


function Designers() {

  return (<>
    <main className='designersMain'>

      <h1> Dette er oss</h1>

      <div className='designersContainer'>
        {designers.map(({ title, text, images, soMe1, soMe2 }, index) => <DesignerCard key={index} title={title} text={text} images={images} soMe1={soMe1} soMe2={soMe2}/>)}
      </div>

    </main> </>
  )
}

export default Designers
