import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import WishList from './pages/WishList';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';

const router= createBrowserRouter([
  {
    path: '/',
    element:<App/>
  },
  {
    path: "/wishlist",
    element:<WishList/>
  },
  {
    path: "/cart",
    element:<CartPage/>
  },
  {
    path:'/allcategory',
    element:<CategoryPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


