import { useMyContext } from "../App";
const Individual=()=>{

    const {btn,addTocart,Sized} = useMyContext();
//     const isthere=(item)=>{
//     const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
//     // document.getElementById(item.id).style.color="white";
//     if(index >=0)
//     {
//       document.getElementById(item.id).style.color="red";
//       return true;
//     }
//     else{
//     return false;
//     }
    
//   }

if(Sized.length > 0){
    console.log(Sized.length);
    return (
        <>
            <div className='image-container'>
                {Sized.map(diff =>
                    <div key={diff.id} className='image'>
                        <img src={diff.image} alt={diff.alt} />
                        <h5>{diff.rate}</h5>
                        <h4>{diff.brand}</h4>
                        <button className='cart-button' id={diff.id} onClick={() => addTocart(diff)} style={{color :btn(diff)? "red" : "white"}}>{btn(diff)?"Remove from Cart":"Add to Cart"}</button>
                    </div>
                )}
            </div>
        </>
    )
                }
                else{
                    return(
                        
                        <h2>Items not available in the selected category.</h2>
                        
                    )
                }
}
export default Individual;