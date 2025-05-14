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
import SignUp from "./Components/signup";
import ApplyJob from "./Components/ApplyJob";
import SetFilters from "./Components/SetFilters"
import Details from "./Components/Details";
import AllJob from "./Components/AllJob";
import Boarding from "./Components/Boarding";
import ResetPassword from "./Components/ResetPassword";
import Verification from "./Components/Verification";
import ForgetPassword from "./Components/ForgetPassword";
import ConfirmNewAccount from "./Components/ConfirmNewAccount";
import Success from "./Components/Success";
import SearchJob from "./Components/SearchJob";
import MessageInbox from "./Components/MessageInbox";
import JobDetailsTracking from "./Components/JobDetailsTracking"
import SkillTest from "./Components/SkillTest";
import WorkExperience from "./Components/WorkExperience";
import SkillAssessment from "./Components/SkillAssessment";
import SkillAssessment2 from "./Components/SkillAssessment2";
import SkillAssessment3 from "./Components/SkillAssessment3";
import SuccessSkill from "./Components/SuccessSkill";
import Education from "./Components/Education";
import Awards from "./Components/Awards";
import GroupMessage from "./Components/GroupMessage";
import EmptyNotification from "./Components/EmptyNotification";

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
    path:"/applyjob",
    element:<ApplyJob/>
  },
  {
    path:"/setfilters",
    element:<SetFilters/>
  },
  {
    path:"/details",
    element:<Details/>
  },
  {
    path:"/alljob",
    element:<AllJob/>
  },
  {
    path:"/boarding",
    element:<Boarding/>

  },
  {
    path:"/signup",
    element:<SignUp/>
  },
  {
    path:"/resetpassword",
    element:<ResetPassword/>
  },
  {
    path:"/verification",
    element:<Verification/>
  },
  {
    path:"/forgetpassword",
    element: <ForgetPassword/>

  },
  {
    path:"/setup/interest/confirmnewaccount",
    element:<ConfirmNewAccount/>
  },
  {
    path:"/setup/interest/confirmnewaccount/success",
    element:<Success/>
  },
  {
    path:'/searchjob',
    element:<SearchJob/>
  },
  {
    path:'/message/messageinbox',
    element:<MessageInbox/>
  },
  {
    path:'/jobdetailstracking',
    element:<JobDetailsTracking/>
  },
  {
    path:'/skilltest',
    element:<SkillTest/>
  },
  {
    path:'/workexperience',
    element:<WorkExperience/>
  },
  {
    path:'/skillassessment',
    element:<SkillAssessment/>
  },
  {
    path:'/skillassessment2',
    element:<SkillAssessment2/>
  },
  {
    path:'/skillassessment3',
    element:<SkillAssessment3/>
  },
  {
    path:'/successskill',
    element:<SuccessSkill/>
  },
  {
    path:'/education',
    element:<Education/>
  },
  {
    path:'/awards',
    element:<Awards/>
  },
  {
    path:'/groupmessage',
    element: <GroupMessage />
  },
  {
     path:'/emptynotification',
    element: <EmptyNotification />
  }

   
  

  
]);
const App = () => {
  return (
    
    <div >
      {/* <Home/> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
