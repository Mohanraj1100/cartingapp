import { useMyContext } from '../App'
import '../styles/rightside.css'
const MainContent = () => {

    const {products,btn,addTocart} = useMyContext();

    return (
        <>
            <div className='image-container'>
                {products.map(shoe =>
                    <div key={shoe.id} className='image'>
                        <img src={shoe.image} alt={shoe.alt} />
                        <h5>{shoe.rate}</h5>
                        <h4>{shoe.brand}</h4>
                        <button style={{color :btn(shoe)? "red" : "white"}} className='cart-button'  id={shoe.id} onClick={() => addTocart(shoe)}>{btn(shoe)?"Remove from Cart":"Add to Cart"}</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default MainContent;