import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogPage from './pages/BlogPage.jsx'
import AboutUs from './pages/AboutUss.jsx'
import ContcatUs from './pages/ContcatUs.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/contact",
    element: <ContcatUs />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  
   <RouterProvider router={router} />
    
    
  //</React.StrictMode>,
)
