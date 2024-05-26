
import Main from './pages/Main.jsx'
import AddressInput from './pages/AddressInput.jsx'
import Tests from './pages/Tests.jsx'
import Graph from './pages/Graph.jsx'
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
      path:'/tests',
      element: <Tests/>,
    },
    {
      path:'/graph',
      element: <Graph/>,
    },
  ]);