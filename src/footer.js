import './footer.css';
import { FaWhatsapp , FaInstagram , FaFacebook } from "react-icons/fa";
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="footer-info">
                    <h3>About Us</h3>
                    <p>Good Shoes Takes You Good Places</p>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Anna Nagar</p>
                    <p>Madurai,TamilNadu</p>
                    <p>Phone: 8765456783</p>
                    <p>Email: info@myshoeshop.com</p>
                </div>
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><FaWhatsapp></FaWhatsapp></li>
                        <li><FaFacebook></FaFacebook></li>
                        <li><FaInstagram></FaInstagram></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
