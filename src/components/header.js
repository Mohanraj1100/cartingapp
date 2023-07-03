import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/header.css'
const Header=(props)=>{
    const changesize=()=>{
        props.setBrandActive(null);
        props.setSizeActive(null);
        props.setSizeOption(null);
        props.setBrandOption(null);
        props.setIsInitialRender(true);
        props.setIsBrandInitialRender(true);
    }
    return(
        <div className="header">
            <span className='count'>{props.count}</span>
            <Link to = '/' onClick={()=>changesize()}><h1>FootWears</h1></Link>
            <div className="cart-icon">
            <Link to="/addcart"><FaCartPlus className="icon"></FaCartPlus></Link>
            </div>
        </div>
            
    )
}

export default Header;