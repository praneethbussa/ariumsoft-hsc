import React from "react";
import Header from "./Header";
import RecruiterDashboard from "./RecruiterDashboard";
import { Link, Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import MyProfile from "./MyProfile";
import CandidateInfo from "./CandidateInfo";
import Candidates from "./Candidates";
import CandidateStatus from "./CandidateStatus";
import CandidateNotes from "./CandidateNotes";
import Notifications from "./Notifications";
import MyTasks from "./MyTasks";
import CreateContract from "./CreateContract";
import Contracts from "./Contracts";
import AdminDashboard from "./AdminDashboard";


const Home = (props) => {
    const {isLogin} = props;
    return(
        <>
        {/* <Header isLogin={isLogin}/> */}
        <Contracts />
        </>
    )
}

export default Home;