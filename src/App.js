import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Settings from "./Components/Settings";
import MyProfile from "./Components/MyProfile";
import ChangePassword from "./Components/ChangePassword";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CandidateInfo from "./Components/CandidateInfo";
import Candidates from "./Components/Candidates";
import Notifications from "./Components/Notifications";
import MyTasks from "./Components/content/MyTasks";
import ChangeStatus from "./Components/content/ChangeStatus";
import SaveJob from "./Components/content/SaveJob";
import JobOpening from "./Components/content/JobOpening";
import CreateJobOpening from "./Components/content/CreateJobOpening";


const App = () => {
  return (
    <>
      <Header isLogin/>
      <div className="container-fluid">
        <div className="row" style={{marginTop:'25px'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isLogin={true} />} />
        <Route path="/mytasks" element={<MyTasks/>} />
        <Route path="/createjobopening" element={<CreateJobOpening />} />
        <Route path="/jobOpenings" element={<CreateJobOpening/>} />
        <Route path="/settings" element={ <Settings /> } />
        <Route path="/notifications" element={ <Notifications /> } />
        <Route path="/settings/myProfile" element={<MyProfile />} />
        <Route path="/myProfile" element={<MyProfile />} />
        <Route path="/settings/changePassword" element={<ChangePassword />} />
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/addCandidate" element={<CandidateInfo />} /> 
        <Route path='/changestatus' element={<ChangeStatus/>}></Route>
        <Route path='/savejob' element={<SaveJob/>}></Route>
        <Route path='/searchjobopening' element={<JobOpening/>}></Route>
        <Route path='/changestatus' element={<ChangeStatus />}></Route>
        <Route path='/candidatedetails/:id' element={<ChangeStatus />} />
        <Route path='/candidates/editcandidatedetails' element={<CandidateInfo />} />
        <Route path="/mytasks/:id" element={<MyTasks/>} />
        <Route path="/searchjobopening/:id" element={<JobOpening/>} />
      </Routes>
      </div>
      </div>
      
    </>
  );
};

export default App
