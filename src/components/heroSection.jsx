import shopPhotoMob from '../assets/shop/shop1.jpg'
import '../styles/hero.css'
import shopPhoto from '../assets/shop/shop3.jfif'


function HeroSection() {
  return <>
    <div className='heroImgContainer'>
      <img className="heroImgMob" src={shopPhotoMob} ></img>

      <img className="heroImgDesktop" src={shopPhoto} ></img>
      <a className='heroBtn' href="/designers"> Møt oss </a>
    </div>
  </>
}

export default HeroSection