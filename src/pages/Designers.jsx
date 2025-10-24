import DesignerSection from '../components/designerSection.jsx'
import '../styles/designers.css'


function Designers() {
  return (<>
     <main className='designersMain'>
     
     <h1> Dette er oss</h1>

 <div className='designersContainer'>
  <DesignerSection />
  <DesignerSection />
  <DesignerSection />
  <DesignerSection />
  <DesignerSection />
  <DesignerSection />
  <DesignerSection />
  <DesignerSection />
</div>

   </main> </>
  )
}

export default Designers
