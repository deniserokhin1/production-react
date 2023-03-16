import './styles/index.scss'
import { useTheme } from '01_app/providers/ThemeProvider';
import { classNames } from '06_shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '03_widgets/Navbar';

export const App = () => {
   const {theme, toggleTheme} = useTheme()

   const mods = {}

   return (
   <div className={classNames('app', mods, [theme])}>
      <Navbar/>
      
      <AppRouter/>
      
   </div>
   );
}