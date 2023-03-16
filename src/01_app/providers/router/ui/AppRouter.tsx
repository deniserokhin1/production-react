import {FC, Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '06_shared/config/routeConfig';


interface AppRouterProps {
 className?: string;
}

export const AppRouter:FC<AppRouterProps> = () => {

 return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route element={element} path={path} key={path}/>
      ))}
    </Routes>
 </Suspense>
 );
}