import React from 'react';
//obrazy
import Logo from '../assets/Header_logo_MMM.svg';
import LinkedInDark from '../assets/Linked_Icon_dark.svg';
import InstagramDark from '../assets/Instagram_Icon_dark.svg';
import FacebookDark from '../assets/Facebook_Icon_dark.svg';
import TwitterDark from '../assets/Twitter_Icon_dark.svg';





const Header = () => {
    return(
    
        <header>
            <div className="logo">
                <img src={Logo} alt="logo"></img>
                <button className="cross visible">
                    <span></span>
                    <span></span>
                    
                </button>
            </div>
            
            <nav>
                <ul>
                    <li><a href="index.html" title="o nas" target="_self">o nas</a></li>
                    <li><a href="http" title="o projekcie" target="_self">o projekcie</a></li>
                    <li><a href="trainings.html" title="uslugi" target="_self">usługi</a></li>
                    <li><a href="trainers.html" title="trenerzy" target="_self">trenerzy</a></li>
                    <li><a href="contact.html" title="kontakt" target="_self">kontakt</a></li>
                </ul>
            </nav>

            <div className="sidenav">
                <button className="sprawdz-trening">sprawdz trening!</button>
                <button className="umow-sie">umów się za darmo</button>
                <div className="hamburger-menu-icons">
                    <a href="https://www.linkedin.com/company/make-my-mind/"><img src={LinkedInDark} alt="LinkedIn"></img></a>
                    <a href="https://www.facebook.com/makemymindpl/"><img src={FacebookDark} alt="Facebook"></img></a>
                    <a href="#"><img src={TwitterDark} alt="Twitter"></img></a>
                    <a href="https://www.instagram.com/make_my_mind/"><img src={InstagramDark} alt="Instagram"></img></a>
                </div>
            </div>
            
            <button className="hamburger">
                <span className="hamburger__box">
                  <span className="hamburger__inner"></span>
                </span>
            </button>
    </header>

    )
}

export default Header;