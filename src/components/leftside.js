import '../styles/leftside.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { useMyContext } from '../App'
const Nav = () => {
    const { products, setSized, sizeOption, setSizeOption, setBrandOption, setSizeActive, brandActive, setBrandActive, isInitialRender, setIsInitialRender, isBrandInitialRender, setIsBrandInitialRender, sizeActive, brandOption } = useMyContext();


    console.log(brandOption);
    const changeSize = () => {
        setSizeActive(null);
        setBrandOption(null);
        console.log(brandOption);
        // console.log(props.brandOption)
        brandCart(brandActive);
        // changeSize();
    }

    const changeBrand = () => {
        setBrandActive(null);
        setSizeOption(null);
        sizecart(sizeActive);

    }


    const sizecart = (s) => {
        setSizeActive(s);
        console.log(sizeOption)

        if (sizeOption == null) {
            console.log("In if sizecart")
            const filter = products.filter((item) => s === item.size)
            setSized(filter);
            // setIsInitialRender(false)
            setBrandOption(1);
        }
        else {
            console.log("In else sizecart")

            const filter = products.filter((item) => s === item.size && brandActive === item.brand);
            setSized(filter);
            setIsInitialRender(false);
            setBrandOption(1);
        }

    }
    const brandCart = (n) => {
        setBrandActive(n)
        if (brandOption === null) {
            const filter = products.filter((item) => n === item.brand)
            setSized(filter);
            // setIsInitialRender(false);
            setSizeOption(1);
        }
        else {
            // console.log(brandOption);
            const filter = products.filter((item) => n === item.brand && sizeActive === item.size)
            setSized(filter);
            setIsInitialRender(false);
            setSizeOption(1);
        }

    }

    // useEffect(() => {
    //     // return()=>{
    //     brandCart(brandActive);
    //     // }
    // }, [props.brandOption]);

    useEffect(() => {
        // return()=>{
        console.log("in useeffect")
        if (isInitialRender) {
            setIsInitialRender(false);
        }
        else if (sizeOption == null) {
            sizecart(sizeActive);
        }
        // }
    }, [sizeOption]);

    useEffect(() => {
        // return()=>{
        if (isBrandInitialRender) {
            setIsBrandInitialRender(false)
        }
        else if (brandOption == null) {
            console.log("b2");
            brandCart(brandActive);
        }
        // }
    }, [brandOption]);
    return (
        <>

            <div className="leftside">
                <h3 onClick={() => changeSize()}>size</h3>
                <Link to="/individualcart"><button onClick={() => sizecart(6)} className={sizeActive === 6 ? 'selected' : ''}>6</button></Link>
                <Link to="/individualcart"><button onClick={() => sizecart(7)} className={sizeActive === 7 ? 'selected' : ''}>7</button></Link>
                <Link to="/individualcart"><button onClick={() => sizecart(8)} className={sizeActive === 8 ? 'selected' : ''}>8</button></Link>
                <Link to="/individualcart"><button onClick={() => sizecart(9)} className={sizeActive === 9 ? 'selected' : ''}>9</button></Link>

            </div>

            <div className="leftside">
                <h3 onClick={() => changeBrand()}>Brands</h3>
                <Link to="/individualcart"><button onClick={() => brandCart("Nike")} className={brandActive === "Nike" ? 'selected' : ''}>Nike</button></Link>
                <Link to="/individualcart"><button onClick={() => brandCart("Adidas")} className={brandActive === "Adidas" ? 'selected' : ''}>Adidas</button></Link>
                <Link to="/individualcart"><button onClick={() => brandCart("Reebok")} className={brandActive === "Reebok" ? 'selected' : ''}>Reebok</button></Link>
                <Link to="/individualcart"><button onClick={() => brandCart("Bata")} className={brandActive === "Bata" ? 'selected' : ''}>Bata</button></Link>

            </div>
        </>
    )

}
export default Nav;