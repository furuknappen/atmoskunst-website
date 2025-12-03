import shopPhotoMob from '../assets/shop/shopgift.jpeg'
import '../styles/hero.css'
import shopPhoto from '../assets/shop/shopgift.jpeg'


function HeroSection() {
  return <>
    <section className='heroImgContainer'>
      <img className="heroImgMob" src={shopPhotoMob} ></img>

      <img className="heroImgDesktop" src={shopPhoto} ></img>
      {/* <a className='heroBtn' href="/designers"> Møt oss </a> */}
      <div className="heroText">
       <h2 className='light'> Vi har åpent </h2>
      <p className='light'>Mandag-Lørdag: 10:00 - 18:00</p>
      </div>
    </section>
  </>
}

export default HeroSection