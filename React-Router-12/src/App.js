import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} >

          </Route>
        </Routes>
      </main>


    </div>
  );
}

export default App;
