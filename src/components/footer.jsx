import '../styles/footer.css';
import Instagram from '../assets/instagram.svg?react'
import Facebook from '../assets/facebook.svg?react'
import LogoFooter from '../assets/atmos-egen.svg?react'
import Tiktok from '../assets/tiktok.svg?react'


function Footer() {
return <>
  <footer>

    <div class="flexDivFooter">
      <div class="logoAndSocials">
        <a href="/" aria-label="Atmos Kunst Home" className='logoA'>
        <LogoFooter className="logoFooter" />
        </a>

        {/* <a class="mobileLinks" href="/comingsoon-page.html"> Help & Information </a>
        <a class="mobileLinks" href="/comingsoon-page.html"> About Rainy Days </a> */}

        <div aria-label="Follow Rainy Days on social media">
          <ul class="socials">
            <li>
              <a href="https://tiktok/atmoskunst" target="_blank" aria-label="Atmos Kunst on tiktok">
              <Tiktok />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/" target="_blank" aria-label=" Atmos Kunst on instagram">
              <Instagram />
              </a>
            </li>
            <li>
              <a href="https://facebook.com/" target="_blank" aria-label=" Atmos Kunst on facebook">
          <Facebook />
              </a>
            </li>
          </ul>
        </div>

      </div>

      <nav aria-labelledby="footer-help-info">
        <h3 id="footer-help-info">HELP & INFORMATION</h3>
        <ul>
          <li> <a href="/comingsoon-page.html"> Help </a> </li>
          <li> <a href="/comingsoon-page.html" aria-label="Frequently asked Questions">
              FAQ </a> </li>
          <li> <a href="/comingsoon-page.html"> Track order </a> </li>
          <li> <a href="/comingsoon-page.html"> Delivery & returns</a> </li>
        </ul>
      </nav>

      <nav aria-labelledby="footer-about-rainy-days">
        <h3 id="footer-about-rainy-days"> ABOUT RAINY DAYS </h3>
        <ul>
          <li> <a href="/comingsoon-page.html"> About us </a> </li>
          <li> <a href="/comingsoon-page.html"> Contact us </a> </li>
          <li> <a href="/comingsoon-page.html"> Our history </a> </li>
          <li> <a href="/comingsoon-page.html"> Job offers at Rainy Days</a> </li>
        </ul>
      </nav>
    </div>

  </footer>






{/* <footer className="footerDiv">


   <p>footer</p>

</footer> */}
</>



}

export default Footer