import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "../assets/RecruiterDashboard.css";
import GreenTick from "../Images/greentick.svg";
import RedCross from "../Images/redcross.svg";
// import CandidateStatus from "./CandidateStatus";

// const CommonRouteHelper = ({ routes, defaultRoute, redirectTo }) => {
//   return (
//     <Routes>
//       {routes.map((url, Component, key) => {
//         <Route key={key} path={url} element={Component} />;
//       })}
//     </Routes>
//   );
// };

// const WrapComponent = Component => ({...props}) => {
//   return (
//     <>
//     <Component {...props} />
//     </>
//   );
// }
// const recruitTabs = [
//   {
//     url:"/candidateStatus",
//     key:"1",
//     Component: WrapComponent(CandidateStatus)
//   }
// ]

const RecruitDashboard = () => {
  return (
    <>
      {/* <CommonRouteHelper routes={recruitTabs}/> */}
      <div className="recruiter-page">
        <p className="recruiter-name">Hello John Williams!</p>
    <Row>
      <Col md={4}>
        <div className="tasks">
          <div className="numof_tasks">11</div>
          <div className="open_tasks">My Tasks</div>
        </div>
        <Link to="/mytasks">
        <div className="click-more">More...</div>
        </Link>
      </Col>
      <Col md={4}>
        <div className="tasks">
          <div className="numof_tasks">14</div>
          <div className="open_tasks">My Job Openings</div>
        </div>
        <Link to="/jobOpenings">
        <div className="click-more">More...</div>
        </Link>
      </Col>
      <Col md={4}>
        <div className="tasks">
          <div className="numof_tasks">12</div>
          <div className="open_tasks">Candidates</div>
        </div>
        <Link to="/candidates">
        <div className="click-more">More...</div>
        </Link>
      </Col>
    </Row>

    <Row>
      <Col md={12}>
    <Row>
      <Col md={4}>
    <Row>
          <div className="task1">
            <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>
          </div>
    </Row>
    <Row>
          <div className="task2">
          <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>                 
          </div>
    </Row>
    <Row>
         <div className="task3">
           <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>                 
          </div>
    </Row>
    <Row>
         <div className="task4">
           <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>                 
          </div>
    </Row>
    <Row>
         <div className="task5">
           <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>                 
          </div>
    </Row>
      </Col>

    
      <Col md={4}>
    <Row>
          <div className="Job1">
              <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>
          </div>
    </Row>
    <Row>
          <div className="Job2">
              <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>
          </div>
    </Row>
    <Row>
          <div className="Job3">
              <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>
          </div>
    </Row>
    <Row>
          <div className="Job4">
              <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>
          </div>
    </Row>
    <Row>
          <div className="Job5">
              <div className="jobid">JO001 - Job Requirement for Tesla</div>
    <Row>
      <Col md={2}><i className="fa-solid fa-circle-user" id="user-icon"></i></Col>
      <Col md={3}><div className="assignee-name">Emily</div></Col>
      <Col md={4}><div className="date">22-09-2022</div></Col>
      <Col md={2}><div className="time">2:04pm</div></Col>
    </Row>
          </div>
    </Row>
      </Col>


      <Col md={4}>
    <Row>
        <div className="Candidate1">
               <div className="candid-status">Interview Scheduled</div>
      <Col>
          <span className="icon1"><i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." /></span></Col>
          <Col>
      <div className="candidateId1">C001 - Robert Stuart</div>
      </Col>
              <div className="candidate-role">Scrum master</div>
        </div>
    </Row>
    {/* <Row>
        <div className="Candidate2">
               <div className="candid-status">Interview Scheduled</div>
      <Col md={2}>
          <i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." />
      </Col>
       <Col><div className="candidateId2">C002 - Venugopala Mutth..</div></Col>
              <div className="candidate-role">UI/UX designer</div>
        </div>
    </Row>
    <Row>
        <div className="Candidate3">
               <div className="candid-status">In Process</div>
      <Col md={2}>
          <i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." />
      </Col>
      <Col><div className="candidateId3">C003 - James Addison</div></Col>
              <div className="candidate-role">Scrum master</div>
        </div>
    </Row>
    <Row>
        <div className="Candidate4">
               <div className="candid-status">Rejected</div>
      <Col md={2}>
          <i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={RedCross} className="tick-img" alt="..." />
      </Col>
      <Col><div className="candidateId4">C004 - Adarsh Singh</div></Col>
              <div className="candidate-role">Android Developer</div>
        </div>
    </Row>
    <Row>
        <div className="Candidate5">
               <div className="candid-status">Available</div>
      <Col md={2}>
          <i className="fa-solid fa-circle-user" id="candidate-icon"></i>
          <img src={GreenTick} className="tick-img" alt="..." />
      </Col>
      <Col><div className="candidateId5">C005 - Steve Williams</div></Col>
              <div className="candidate-role">IOS developer</div>
        </div>
    </Row> */}
      </Col>
    </Row>
      </Col>
    </Row>
        </div>
    </>
  );
};

export default RecruitDashboard;
