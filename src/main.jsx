import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'; //  On importe le RouterProvider de react-router-dom. Il permet de passer des données à tous les composants de l'application.
import { router } from "./routes/router";          //  Router.jsx contient les différents composants qui construisent la page web (Navbar, Banner, Apartmentgrid, Footer).


ReactDOM.createRoot(document.getElementById('root')).render(    // On crée un root avec ReactDOM.createDOM et récupèrer le "root" présent dans la index.html à la ligne 16.        
  <React.StrictMode>                     
    <RouterProvider router={router} />                        
  </React.StrictMode>
);
