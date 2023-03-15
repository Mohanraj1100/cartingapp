import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/header.css'
const Header=(props)=>{
    return(
        <div className="header">
            <span className='count'>{props.count}</span>
            <Link to = '/'><h1>FootWears</h1></Link>
            <div className="cart-icon">
            <Link to="/addcart"><FaCartPlus className="icon"></FaCartPlus></Link>
            </div>
        </div>
            
    )
}

export default Header;