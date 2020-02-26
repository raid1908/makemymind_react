import React from 'react';
//obrazy

import LinkedIn from '../assets/Linked_Icon.svg';
import Instagram from '../assets/Instagram_Icon.svg';
import Facebook from '../assets/Facebook_Icon.svg';
import Twitter from '../assets/Twitter_Icon.svg';
import PhoneIcon from '../assets/np_phone_2828705_9B9B9B.svg';
import EmailIcon from '../assets/np_mail_933334_9B9B9B.svg';





const Footer = () => {
    return(
    
        <footer>
       
        <div className="footer">
            
            <div className="left">
                Masz pytania?<br></br> Skontaktuj się z naszym konsultantem!
                <div className="tel"><img src={PhoneIcon} alt="phoneIcon"></img>+48 000 000 000</div>
                <div className="mail"><img src={EmailIcon} alt="EmailIcon"></img>kontakt@makemymind.pl</div>
                <div className="icons">
                    <a href="https://www.linkedin.com/company/make-my-mind/"><img src={LinkedIn} alt="linkedin"></img></a>
                    <a href="https://www.facebook.com/makemymindpl/"><img src={Facebook} alt="Facebook"></img></a>
                    <a href="#"><img src={Twitter} alt="Twitter"></img></a>
                    <a href="https://www.instagram.com/make_my_mind/"><img src={Instagram} alt="Instagram"></img></a>
                </div>
            </div>
            

            <div className="middle">
                Make my mind sp. z o. o. <br></br> KRS: 0000677255, NIP:7451847771, <br></br> REGON: 366168664 <br></br> ul. Fredry 2/5a <br></br> 61-701 Poznań, Polska
            </div>

            <div className="right">
                Fitness dla umysłu
                <nav className="nav-small">
                    <table>
                        <tbody>
                            <tr>
                                <td><a href="index.html" title="o nas" target="_blank">o nas</a></td>
                                <td><a href="trainers.html" title="trenerzy" target="_blank">trenerzy</a></td>
                            </tr>
                            <tr>
                                <td><a href="http" title="o projekcie" target="_blank">o projekcie</a></td>
                                <td><a href="contact.html" title="kontakt" target="_blank">kontakt</a></td>
                            </tr>
                            <tr>
                                <td><a href="trainings.html" title="uslugi" target="_blank">usługi</a></td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            </div>
        </div>


        <div className="copyrights">
            Copyrights @ Make my mind 2019
        </div>
    
</footer>

    )
}

export default Footer;