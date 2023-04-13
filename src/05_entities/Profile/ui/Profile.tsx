import { classNames } from '06_shared/lib/classNames/classNames';
import {FC} from 'react';


interface ProfileProps {
 className?: string;
}

export const Profile:FC<ProfileProps> = () => {

 return (
 <div className={classNames('')}></div> 
 );
}