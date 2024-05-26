
import Main from './pages/Main.jsx';
import AddressInput from './pages/AddressInput.jsx';
import ReportPage from './pages/ReportPage.jsx';
import QuizPage from './pages/QuizPage.jsx';
import KeyPage from './pages/KeyPage.jsx';
import Tests from './pages/Tests.jsx'
import Graph from './pages/Graph.jsx'
import VerifyPage from './pages/Verify.jsx'
import NotVerifiedPage from './pages/NotVerifiedPage.jsx';
import {
    createBrowserRouter
  } from "react-router-dom";
import NotVerifedPage from './pages/NotVerifiedPage.jsx';


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
    {
      path: '/verify',
      element: <VerifyPage/>,
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
    {
      path:'/notverified',
      element: <NotVerifedPage/>,
    }
  ]);
