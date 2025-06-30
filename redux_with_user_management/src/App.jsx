import "./App.css";

import {Route, Router, Routes,createBrowserRouter,BrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

const App = () => {
  let navLinks=[{
    pathTo:"/",compTo:<HomePage/>
  },
{
    pathTo:"/login",compTo:<Login/>
  },
{
    pathTo:"/register",compTo:<Register/>
  }]
  return <>
  
  <BrowserRouter>
    <Routes>
      {
        navLinks.map((navLink)=> (
          <>
          <Route path={navLink.pathTo}  element={navLink.compTo}/>
          </>
        ))
      }
    </Routes>
  </BrowserRouter>
  </>
};

export default App;
