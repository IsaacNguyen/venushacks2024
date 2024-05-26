
import Main from './pages/Main.jsx';
import AddressInput from './pages/AddressInput.jsx';
import ReportPage from './pages/ReportPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import KeyPage from './pages/KeyPage.jsx';
import {
    createBrowserRouter
  } from "react-router-dom";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    }, 
    {
      path: '/q',
      element: <ReportPage/>,
    },
    {
      path:'/key',
      element: <KeyPage/>,
    },
    {
      path: '/quiz',
      element: <QuizPage/>,
    },
   {/* {
      path:'/address',
      element: <AddressInput/>,
    },
  
    {
      path: '/quiz',
      element: <QuizPage/>,
    }
    */},
  ]);