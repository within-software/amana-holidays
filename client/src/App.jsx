import React from 'react'
import './App.scss'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Honeymoon from './pages/honeymoon/Honeymoon';
import HoneymoonDetails from './pages/honeymoondetails/HoneymoonDetails';
import PackagesDeal from './pages/packagesDeal/PackagesDeal';

function App() {

  const Layout = () =>{
    return(
      <div className='app'>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/honeymoon/:countryName",
          element:<Honeymoon/>
        },
        {
          path:"/honeymoon/:countryName/:id",
          element:<HoneymoonDetails/>
        },
        {
          path:"/packages",
          element:<PackagesDeal/>
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App