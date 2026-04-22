import { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import DesignerCard from '../components/designerSection.jsx'
import '../styles/designers.css'
import designers from "../data/designers.json"


function Designers() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const artistParam = searchParams.get('artist');
    if (artistParam) {
      // Find designer with matching displayName (case-insensitive)
      const designer = designers.find(d =>
        (d.displayName || d.title).toLowerCase() === artistParam.toLowerCase()
      );
      if (designer) {
        setTimeout(() => {
          const designerElement = document.querySelector(`[data-designer-title="${designer.title}"]`);
          if (designerElement) {
            designerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Add highlight animation
            designerElement.classList.add('designerSection--highlight');
            // Remove the class after animation completes
            setTimeout(() => {
              designerElement.classList.remove('designerSection--highlight');
            }, 1800);
          }
        }, 100);
      }
    }

    return () => {
      window.scrollTo(0, 0);
    };
  }, [searchParams]);

  return (<>
    <main className='designersMain'>

      <h1> Dette er oss</h1>

      <div className='designersContainer'>
        {designers.map(({ title, text, images, soMe1, soMe2 }, index) => (
          <div key={index} data-designer-title={title}>
            <DesignerCard title={title} text={text} images={images} soMe1={soMe1} soMe2={soMe2}/>
          </div>
        ))}
      </div>

    </main> </>
  )
}

export default Designers
