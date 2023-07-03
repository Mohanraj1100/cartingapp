import Header from './components/header';
import Nav from './components/leftside';
import './App.css';
import MainContent from './components/rightside'
import Footer from './components/footer';
import { createContext, useContext, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addcart from './components/addcart';
import Individual from './components/individualcart';
const mycontext = createContext();

function App() {
  const [Products, setProducts] = useState([]);
  const newSelectProducts = [...Products];
  const [Sized, setSized] = useState([]);
  // const [selectedSize, setSelectedSize] = useState(null);
  const [sizeOption, setSizeOption] = useState(null);
  const [brandOption, setBrandOption] = useState(null);

  const [sizeActive, setSizeActive] = useState(null);
  const [brandActive, setBrandActive] = useState(null);

  const [isInitialRender, setIsInitialRender] = useState(true);
  const [isBrandInitialRender, setIsBrandInitialRender] = useState(true);



  const products = [
    { id: 1, image: require("./images copy/image1.jpg"), alt: "image 1", desc: "SPORTS", brand: "Nike", rate: "800rs", size: 6 },
    { id: 2, image: require("./images copy/image2.jpg"), alt: "image 2", desc: "MODERN", brand: "Adidas", rate: "1000rs", size: 7 },
    { id: 3, image: require("./images copy/image3.jpg"), alt: "image 3", desc: "CASUAL", brand: "Reebok", rate: "900rs", size: 9 },
    { id: 4, image: require("./images copy/image4.jpg"), alt: "image 4", desc: "MODERN", brand: "Bata", rate: "1200rs", size: 8 },
    { id: 5, image: require("./images copy/image5.jpg"), alt: "image 5", desc: "FORMAL", brand: "Nike", rate: "1000rs", size: 7 },
    { id: 6, image: require("./images copy/image6.jpg"), alt: "image 6", desc: "MODERN", brand: "Reebok", rate: "800rs", size: 7 },
    { id: 7, image: require("./images copy/image7.jpg"), alt: "image 7", desc: "SPORTS", brand: "Bata", rate: "1000rs", size: 9 },
    { id: 8, image: require("./images copy/image8.jpg"), alt: "image 8", desc: "MODERN", brand: "Reebok", rate: "650rs", size: 8 },
    { id: 9, image: require("./images copy/image9.jpg"), alt: "image 9", desc: "CASUAL", brand: "Nike", rate: "700rs", size: 9 },
    { id: 10, image: require("./images copy/image10.jpg"), alt: "image 10", desc: "FORMAL", brand: "Adidas", rate: "900rs", size: 7 },
  ]

  const btn = (item) => {
    const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
    return index >=0
    
  }
  
  const addTocart = (item) => {
    const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newSelectProducts.splice(newSelectProducts.findIndex(cartitem => cartitem.id === item.id), 1)
      document.getElementById(item.id).style.color="white";
    } else {
      document.getElementById(item.id).style.color="red";
      newSelectProducts.push({ ...item });
    }
    setProducts(newSelectProducts);
  }

  const contextValue = useMemo(() => ({ products, btn, addTocart, Sized, Products, newSelectProducts,
     setProducts, setSized,sizeOption,setSizeOption,setBrandOption, setSizeActive,brandActive, setBrandActive,isInitialRender, setIsInitialRender,isBrandInitialRender, setIsBrandInitialRender,sizeActive,brandOption}), [newSelectProducts]);
  
    //  const contextValue = { products, btn, addTocart, Sized, Products, newSelectProducts,
    //   setProducts, setSized,sizeOption,setSizeOption,brandOption,setBrandOption,sizeActive, setSizeActive,brandActive, setBrandActive};
  return (
    <mycontext.Provider value={contextValue}>
      <BrowserRouter>
        <div className='App'>
          <Header count={newSelectProducts.length } setBrandActive={setBrandActive} setSizeActive={setSizeActive} setBrandOption={setBrandOption} setSizeOption={setSizeOption} setIsInitialRender={setIsInitialRender} setIsBrandInitialRender={setIsBrandInitialRender} />
          <div className='body'>
            <Nav className='left' />
            <Routes>
              <Route exact path='/individualcart' element={<Individual />}></Route>
              <Route exact path='/addcart' element={<Addcart />}>
              </Route>
              <Route exact path='/' element={
                <MainContent className='right' />}>
              </Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </mycontext.Provider>

  );



}
export function useMyContext() {
  return useContext(mycontext);
}
export default App;
