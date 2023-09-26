import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home';
import DetailPage from './pages/detail';
import CartPage from './pages/cart';

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
      <Routes>
        <Route path='/' element={<HomePage tele={tele}/>}/>
        <Route path='/detail' element={<DetailPage/>}/>
        <Route path='/cart' element={<CartPage tele={tele}/>}/>
        <Route path='*' element={<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
