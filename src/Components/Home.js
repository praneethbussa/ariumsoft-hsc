import React from "react";
import RecruiterDashboard from "./RecruiterDashboard";


const Home = (props) => {
    const {isLogin} = props;
    return(
        <>
        <RecruiterDashboard />
        </>
    )
}

export default Home;