import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProductCardFC }  from './Components/Functional/ProductCardFC';
import ProductCardCC  from './Components/Class/ProductCardCC';


function App() {
  return (
    <div className="App product__container row "  >
      <ProductCardFC/>
      <ProductCardCC/>
    </div>
  );
}

export default App;
