import React, { useState } from "react";
import "./App.css";
import "./assets/Header1.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Settings from "./Components/Settings";
import MyProfile from "./Components/MyProfile";
import ChangePassword from "./Components/ChangePassword";
import CandidateStatus from "./Components/CandidateStatus";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import CandidateInfo from "./Components/CandidateInfo";
import Candidates from "./Components/Candidates";
import Notifications from "./Components/Notifications";
import MyTasks from "./Components/MyTasks";
import CreateJobOpening from "./Components/CreateJobOpening";
import RecruiterDashboard from "./Components/RecruiterDashboard";


const App = () => {
  return (
    <>
      <Header isLogin/>
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
      </Routes>
      
    </>
  );
};

export default App
