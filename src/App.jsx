import React from "react";
import Home from "./Components/Home";
import "./App.css"
import SetupProfile from "./Components/SetupProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SetupProfile from './Components/SetupProfile';
import Interest from "./Components/Interest";
import Notification from "./Components/Notification";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/setup",
    element: <SetupProfile />,
  },

  {
    path: "/setup/interest",
    element: <Interest />,
  },
  {
    path:"/notification",
    element:<Notification/>
  
  }
]);
const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
