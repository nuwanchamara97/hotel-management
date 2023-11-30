import './App.css';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentLogin from './Pages/StudentLogin';
import ForgetPasword from './Pages/ForgetPasword';
import Lecthurerlogin from './Pages/Lecthurerlogin';
import Internationalstudents from './Pages/Internationalstudents';
import ReserchPublication from './Pages/ReserchPublication';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/StudentLogin",
    element: <StudentLogin/>,
  },

  {
    path: "/ForgetPasword",
    element: <ForgetPasword/>,
  },

  {
    path: "/Lecthurerlogin",
    element: <Lecthurerlogin/>
  },
  
  {
    path: "/Internationalstudents",
    element: <Internationalstudents/>
  },

  {
    path: "/ReserchPublication",
    element: <ReserchPublication/>

  }

  

  
]);

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    {/* <Home/> */}
    </>
 
  );
}

export default App;
