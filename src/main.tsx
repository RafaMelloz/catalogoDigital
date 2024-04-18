import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CarShopContextProvider } from './context/index.tsx'
import { App } from './pages/App.tsx'
import { UniqueProd } from './pages/UniqueProd.tsx'
import './index.css'
import './assets/scrollbar.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CarShopContextProvider>
        <Routes>
          <Route index path='/' element={<App />} />
          <Route path='/product/:id' element={<UniqueProd />} />
        </Routes>
      </CarShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)