import '../styles/rightside.css'
const MainContent = (props) => {


    return (
        <>
            <div className='image-container'>
                {props.products.map(shoe =>
                    <div key={shoe.id} className='image'>
                        <img src={shoe.image} alt={shoe.alt} />
                        <h5>{shoe.rate}</h5>
                        <h4>{shoe.brand}</h4>
                        <button className='cart-button' onClick={() => props.addTocart(shoe)}>{props.btn(shoe)?"Remove from Cart":"Add to Cart"}</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default MainContent;