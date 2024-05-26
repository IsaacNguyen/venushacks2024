import SellerVerification from './pages/SellerVerification.jsx';
import SellerKey from './pages/SellerKey.jsx';
import Main from './pages/pages/Main.jsx';
import AddressInput from './pages/AddressInput.jsx';
import ReportPage from './pages/ReportPage.jsx';
import QuizPage from './pages/pages/QuizPage.jsx';
import KeyPage from './pages/pages/KeyPage.jsx';
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
      path: '/report',
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
      path: '/verified',
      element: <VerifyPage/>,
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