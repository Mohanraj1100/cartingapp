const Addcart = (props) => {
    const remove = (item)=>{
        const index = props.newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
        if (index >= 0) {
            props.newSelectProducts.splice(props.newSelectProducts.findIndex(cartitem => cartitem.id === item.id), 1)
        }
        props.setProducts(props.newSelectProducts);
    }
    return (
        <div className='image-container'>
            {props.newSelectProducts.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' onClick={() => remove(shoe)}>Remove</button>
                </div>
            )}
        </div>
    )
}

export default Addcart;