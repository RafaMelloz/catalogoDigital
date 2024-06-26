import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarShopContextProvider } from './context/index.tsx'
import { Home } from './pages/Home.tsx'
import { Product } from './pages/Product.tsx'
import { ShopCar } from './pages/ShopCar.tsx'

import './index.css'
import './assets/scrollbar.css'
import './assets/alert.css'
import { Page404 } from './pages/page404.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarShopContextProvider>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/produto/:id' element={<Product />} />
          <Route path='/carrinho' element={<ShopCar />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </CarShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)