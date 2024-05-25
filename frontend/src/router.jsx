
import Main from './pages/Main.jsx'
import AddressInput from './pages/AddressInput.jsx'
import {
    createBrowserRouter
  } from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path:'/preferences',
      element: <AddressInput/>,
    }
  ]);