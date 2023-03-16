import { classNames } from '06_shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {FC} from 'react';
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from '03_widgets/ThemeSwitcher';


interface NavbarProps {
 className?: string;
}

export const Navbar:FC<NavbarProps> = () => {

 return (
 <div className={classNames(cls.Navbar)}>
        <ThemeSwitcher/>
        <div>
            <AppLink className={cls.margin} theme={AppLinkTheme.SECONDARY} to='/'>Главная</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>О нас</AppLink>
        </div>
 </div> 
 );
}