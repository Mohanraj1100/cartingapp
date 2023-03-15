import Header from './components/header';
import Nav from './components/leftside';
import './App.css';
import MainContent from './components/rightside'
import Footer from './components/footer';
import { useState } from 'react';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom';
import Addcart from './components/addcart';
import Individual from './components/individualcart';

function App() {
  const [Products, setProducts] = useState([]);
  const newSelectProducts = [...Products];

  const [Sized,setSized] = useState([]);


  const products = [
    { id: 1, image: require("./images copy/image1.jpg"), alt: "image 1", desc: "SPORTS", brand: "Nike", rate: "800rs", size: 6},
    { id: 2, image: require("./images copy/image2.jpg"), alt: "image 2", desc: "MODERN", brand: "Adidas", rate: "1000rs", size: 7 },
    { id: 3, image: require("./images copy/image3.jpg"), alt: "image 3", desc: "CASUAL", brand: "Reebok", rate: "900rs", size: 9 },
    { id: 4, image: require("./images copy/image4.jpg"), alt: "image 4", desc: "MODERN", brand: "Bata", rate: "1200rs", size: 8 },
    { id: 5, image: require("./images copy/image5.jpg"), alt: "image 5", desc: "FORMAL", brand: "Nike", rate: "1000rs", size: 10 },
    { id: 6, image: require("./images copy/image6.jpg"), alt: "image 6", desc: "MODERN", brand: "Woodland", rate: "800rs", size: 7 },
    { id: 7, image: require("./images copy/image7.jpg"), alt: "image 7", desc: "SPORTS", brand: "Bata", rate: "1000rs", size: 9 },
    { id: 8, image: require("./images copy/image8.jpg"), alt: "image 8", desc: "MODERN", brand: "Reebok", rate: "650rs", size: 8 },
    { id: 9, image: require("./images copy/image9.jpg"), alt: "image 9", desc: "CASUAL", brand: "Nike", rate: "700rs", size: 10 },
    { id: 10, image: require("./images copy/image10.jpg"), alt: "image 10", desc: "FORMAL", brand: "Adidas", rate: "900rs", size: 7 },
  ]

  const btn = (item) => {
    const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
    return index >= 0;
  }

  const addTocart = (item) => {
    const index = newSelectProducts.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      newSelectProducts.splice(newSelectProducts.findIndex(cartitem => cartitem.id === item.id), 1)
    } else {
      newSelectProducts.push({ ...item });
    }
    setProducts(newSelectProducts);
  };
  return (

    <Switch>
      <div className='App'>
        <Header count={newSelectProducts.length}></Header>
        <div className='body'>
          <Nav className='left' products={products}  setSized={setSized}></Nav>
          <Routes>
          <Route exact path='/individualcart' element={<Individual Sized={Sized} setSized={setSized} addTocart={addTocart} btn={btn}></Individual>}></Route>
            <Route exact path='/addcart' element={<Addcart newSelectProducts={newSelectProducts} setProducts={setProducts} ></Addcart>}>
            </Route>
            <Route exact path='/' element={
              <MainContent className='right' products={products} addTocart={addTocart} btn={btn}>
              </MainContent>}>
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
