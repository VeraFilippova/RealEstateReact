import logoinvest from './logoinvest.png';
import location from '../../../assets/svg/location.svg';
import { ReactComponent as Location } from './location.svg';
import { ReactComponent as Telegram } from './telegram.svg';
import { ReactComponent as Vk } from './vk.svg';
import { useState } from 'react';





function Header() {

  const [navOpenMobile, setNavOpen] = useState(false);
  


  const openMobileNav = ()=>{
    setNavOpen(true)
  }
  const closeMobileNav = ()=>{
    setNavOpen(false)
  }




  return (
    <div>
      <div className={` container header-desktop ${navOpenMobile ? 'header-desktop-close ' : 'header-desktop-open'}`}>
        <div className='header-marking header__top-row--mobile'>
          <div className="header-logo">
            <img src={logoinvest} alt="logo" />

          </div>
          <div className="header-location">
            <Location />
            <div>Мурманск</div>

          </div>
          <div className="header-contactInfo">
            <div className='header-tel'>тел:</div>
            <a href="tel:+78152575757">57-57-57</a>
            <div className='header-workmode'>пн-пт: с 9:00 до 20:00<br />
              сб-вс: с 10:00 до 19:00

            </div>
          </div>
          <div className="header-social">
            <div className='social-border'>
              <Telegram />
            </div>
            <div className='social-border'>
              <Vk />
            </div>
          </div>
          <div className="header-btn">Напишите нам</div>
          <div className='header-mobile-nav'><button className='nav-icon-btn' onClick={openMobileNav}><div className='nav-icon'></div></button></div>
        </div>
        
      </div>

     {/* mobile */}

      <div className='header-nav-mobile '>
        <div className=  {` ${navOpenMobile ? 'header-nav-mobile-open' : 'header-nav-mobile-close'}`}>
        <button onClick={closeMobileNav} className='nav-icon-btn'>
            <div className='nav-icon nav-icon--active'></div>
            </button> 
            <nav className='nav-mobile'>
            <div>menu</div>
            <div className="header-contactInfo">
            <div className='header-tel'>тел:</div>
            <a href="tel:+78152575757">57-57-57</a>
            <div className='header-workmode'>пн-пт: с 9:00 до 20:00<br />
              сб-вс: с 10:00 до 19:00

            </div>
          </div>
          <div className="header-social">
            <div className='social-border'>
              <Telegram />
            </div>
            <div className='social-border'>
              <Vk />
            </div>
          </div>
          <div className="header-btn" >Напишите нам</div>


        </nav>
        </div>
       
      


      </div>
      <Popup/>
     
  
 
     

    </div>

  )
}

export default Header;