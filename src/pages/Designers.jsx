import DesignerCard from '../components/designerSection.jsx'
import '../styles/designers.css'
import designers from "../data/designers.json"


function Designers() {

  return (<>
    <main className='designersMain'>

      <h1> Dette er oss</h1>

      <div className='designersContainer'>
        {designers.map(({ title, text, images }, index) => <DesignerCard key={index} title={title} text={text} images={images} />)}
      </div>

    </main> </>
  )
}

export default Designers
