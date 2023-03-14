import './styles/index.scss'
import {Suspense } from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './styles/theme/useTheme';
import { classNames } from './helpres/classNames/classNames';

export const App = () => {
   const {theme, toggleTheme} = useTheme()

   const mods = {}

   return (
   <div className={classNames('app', mods, [theme])}>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О нас</Link>

      <button onClick={toggleTheme}>Переключить тему</button>

      <Suspense fallback={<div>Loading...</div>}>
         <Routes>
            <Route path='/about' element={<AboutPageLazy/>}/>
            <Route path='/' element={<MainPageLazy/>}/>
         </Routes>
      </Suspense>
      
   </div>
   );
}