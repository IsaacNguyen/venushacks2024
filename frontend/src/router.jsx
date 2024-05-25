import App from './App.jsx'
import AddressInput from './pages/AddressInput.jsx'
import {
    createBrowserRouter
  } from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path:'/preferences',
      element: <AddressInput/>,
    }
  ]);