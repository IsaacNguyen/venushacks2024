
import Main from './pages/Main.jsx'
import AddressInput from './pages/AddressInput.jsx'
import SellerVerification from './pages/SellerVerification.jsx';
import SellerKey from './pages/SellerKey.jsx';
import {
    createBrowserRouter
  } from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
    {
      path:'/address',
      element: <AddressInput/>,
    },
    {
      path:'/verification',
      element: <SellerVerification/>
    },
    {
      path:'/key-generate',
      element: <SellerKey/>
    },
    
  ]);