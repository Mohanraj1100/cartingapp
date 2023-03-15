import '../styles/leftside.css'
import { Link } from 'react-router-dom'
const Nav=(props)=>
{
    const sizecart=(s)=>{
        const filter = props.products.filter((item)=>s===item.size)
        props.setSized(filter);
    
    }
    return(
        <>
        <div className="leftside">
            <h3>size</h3>
            <Link to="/individualcart"><button onClick={() => sizecart(6)}>6</button></Link>
            <Link to="/individualcart"><button onClick={() => sizecart(7)}>7</button></Link>
            <Link to="/individualcart"><button onClick={() => sizecart(8)}>8</button></Link>
            <Link to="/individualcart"><button onClick={() => sizecart(9)}>9</button></Link>
        </div>
        </>
    )
    
    }
export default Nav;