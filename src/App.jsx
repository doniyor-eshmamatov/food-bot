import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import CartPage from './pages/cart';
import { CSSTransition } from 'react-transition-group';

const tele = window.Telegram.WebApp

function App() {
  const [theme, setTheme] = useState('')

  function setThemeClass() {
    setTheme(tele.colorScheme)
  }

  

  useEffect(() => {
    tele.ready()
    tele.onEvent('themeChanged', setThemeClass);
    setThemeClass();
  }, [])


  return (
    <div>
      <div className="page">
          <Routes>
            <Route path='/:chat_id' element={<HomePage tele={tele} />} />
            <Route path='/detail' element={<DetailPage />} />
            <Route path='/cart' element={<CartPage tele={tele} />} />
            <Route path='*' element={<HomePage />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
