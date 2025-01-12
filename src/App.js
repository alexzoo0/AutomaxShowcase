import React from 'react';
import Home from './componets/home/home.js';
import OurShop from './componets/ourShop/ourShop.js';
import { BrowserRouter, Route, Routes, } from 'react-router-dom'

function App() {


  return (
    <BrowserRouter future={{
      v7_relativeSplatPath: true,
    }}>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
        <Route path='OurShop'>
          <Route index element={<OurShop />} />
          <Route path='*' element={<OurShop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );


}


export default App;
