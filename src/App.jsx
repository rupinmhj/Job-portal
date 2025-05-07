import React from "react";
import Home from "./Components/Home";
import "./App.css"
import SetupProfile from "./Components/SetupProfile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import SetupProfile from './Components/SetupProfile';
import Interest from "./Components/Interest";
import Notification from "./Components/Notification";
import Profile from "./Components/Profile"
import Clipboard from "./Components/Clipboard";
import Message from './Components/Message'
import SignIn from "./Components/SignIn";
import ApplyJob from "./Components/ApplyJob";
import SetFilters from "./Components/SetFilters"
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
  },
  {
    path:"/profile",
    element: <Profile />
  },
  {
    path:"/clipboard",
    element:<Clipboard />
  },
  {
    path:"/message",
    element: <Message />
  },
  {
    path:"/signin",
    element:<SignIn/>
  },
  {
    path:"applyjob",
    element:<ApplyJob/>
  },
  {
    path:"setfilters",
    element:<SetFilters/>
  },
]);
const App = () => {
  return (
    <div className="font-urbanist" id="scrollable">
      {/* <Home/> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
