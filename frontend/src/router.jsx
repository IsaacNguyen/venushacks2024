
import Main from './pages/Main.jsx'
import AddressInput from './pages/AddressInput.jsx'
import Quiz from './pages/Quiz.jsx'
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
      path: '/quiz',
      element: <Quiz/>,
    }
  ]);