import { useMyContext } from "../App";
const Addcart = () => {

    const {newSelectProducts,setProducts} = useMyContext();
    const remove = (item)=>{
        newSelectProducts.splice(newSelectProducts.findIndex(cartitem => cartitem.id === item.id), 1)
        setProducts(newSelectProducts);
    }
    if(newSelectProducts.length >0){
    return (
        <div className='image-container'>
            {newSelectProducts.map(shoe =>
                <div key={shoe.id} className='image'>
                    <img src={shoe.image} alt={shoe.alt} />
                    <h5>{shoe.rate}</h5>
                    <h4>{shoe.brand}</h4>
                    <button className='cart-button' style={{color: "red"}} onClick={() => remove(shoe)}>Remove</button>
                </div>
            )}
        </div>
    )
            }
            else{
                return(
                    <>
                    <h2>No Items in Cart</h2>
                    </>
                )
            }
}

export default Addcart;