import shopPhotoMob from '../assets/shop/IMG_6111.jpg'
import '../styles/hero.css'
import shopPhoto from '../assets/shop/shopgift.jpeg'
import heroPhoto from '../../public/images/hero.jpg'


function HeroSection() {
  return <>
    <section className='heroImgContainer'>
      <img className="heroImgMob" src={shopPhotoMob} ></img>

      <img className="heroImgDesktop" src={heroPhoto} ></img>
      {/* <a className='heroBtn' href="/designers"> Møt oss </a> */}
      {/* <div className="heroText">
       <h1 className='light'> Ha en fin desember! </h1>
       </div> */}
       <div className="heroTextDiv"> 
        {/* <h1>Mandag-Lørdag: 10:00 - 18:00</h1> */}

      {/* <p className='light'>Mandag-Lørdag: 10:00 - 18:00</p> */}
      </div>
    </section>
  </>
}

export default HeroSection