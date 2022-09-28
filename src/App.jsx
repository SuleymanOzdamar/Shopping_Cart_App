// import { useState } from 'react';
import './App.css';
// import Basket from './components/Basket';
// import Header from './components/Header';
// import Main from './components/Main';
// import data from './data';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import IndexHeader from './components/Header/indexHeader';
import IndexMain from './components/Main/indexMain';
import IndexBasket from './components/Basket/indexBasket';



function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <IndexHeader />
      <Routes>
        <Route path="/" element={ <IndexMain /> } />
        <Route path="/cart" element={ <IndexBasket /> } />
      </Routes>
    </Router>
  );
}


export default App;
