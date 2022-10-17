import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/RecruiterDashboard.css";
import GreenTick from "../Images/greentick.svg";
import RedCross from "../Images/redcross.svg";
import { getAllTasks } from "./helpers/api/tasks";
import { getAllJobOpenings } from "./helpers/api/jobs";
import { getAllCandidates } from "./helpers/api/candidate";
import dot from "../Images/Ellipse.svg";

const RecruitDashboard = () => {
  const readStyle={
    fontSize : "16px",
    fontWeight : "500"
  };
  const unReadStyle={
    fontSize : "16px",
    fontWeight : "bold"
  };
  const recruiterStyle={
    fontSize : "14px",
    fontWeight : "600"
  };
  const RecruiterStyle={
    fontSize : "14px",
    fontWeight : "bold"
  };
  const dateStyle={
    fontSize : "12px",
    fontWeight : "400"
  };
  const DateStyle={
    fontSize : "12px",
    fontWeight : "400",
    color: "#3AB8DA"
  };

  const [tasks, setTasks] = useState({});
  const [jobs, setJobs] = useState([]);
  const [candidate, setCandidate] =useState([]);

  useEffect(() => {
    (async () => {
      setTasks(await getAllTasks()); 
      setJobs(await getAllJobOpenings()); 
      setCandidate(await getAllCandidates());    
    })();
  }, []);

  return (
    <>
      <div className="col-md-10 recruiter-page">
        <p className="recruiter-name">Hello John Williams!</p>
        <Row>
          <Col md={4}>
            <div className="tasks">
              <div className="numof_tasks">{tasks.results}</div>
              <div className="open_tasks">My Tasks</div>
            </div>
            <Link to="/mytasks">
              <div className="click-more">More...</div>
            </Link>
          </Col>
          <Col md={4}>
            <div className="tasks">
              <div className="numof_tasks">{jobs.results}</div>
              <div className="open_tasks">All Job Openings</div>
            </div>
            <Link to="/jobOpenings">
              <div className="click-more">More...</div>
            </Link>
          </Col>
          <Col md={4}>
            <div className="tasks">
              <div className="numof_tasks">{candidate.results}</div>
              <div className="open_tasks">My Candidates</div>
            </div>
            <Link to="/candidates">
              <div className="click-more">More...</div>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <Row style={{ marginTop: 15 }}>
              <Col md={4}>
                {tasks?.data?.Tasks?.length && tasks?.data?.Tasks?.map((eachTask) => 
                  <Link to={`/mytasks/${eachTask?._id}`} style={{textDecoration:'none', color:'#A2A2A2'}}>
                  <div className="task">
                    <img src={eachTask?.readstatus == "unread" ? dot : null} style={{float: "right"}} />
                    <div className="jobid" style={eachTask?.readstatus == "unread" ? unReadStyle : readStyle}>
                      {eachTask?.title}
                    </div>
                    <div className="d-flex flex-row">
                      <div className="col-md-1 client">
                        <i className="fa-solid fa-circle-user" id="user-icon" />
                      </div>
                      <div className="col assignee-name" style={eachTask?.readstatus == "unread" ? RecruiterStyle : recruiterStyle}>Emily</div>
                      <div className="date mx-2 col-md-auto" style={eachTask?.readstatus == "unread" ? DateStyle : dateStyle}>{eachTask?.createddate}</div>
                      <div className="time col-md-2" style={eachTask?.readstatus == "unread" ? DateStyle : dateStyle}>{eachTask?.createdtime}</div>
                    </div>
                  </div>
                  </Link>
                )}                
              </Col>

              <Col md={4}>
                {jobs?.data?.Jobopenings?.length && jobs?.data?.Jobopenings?.map((eachJob) =>
                  <Link to={`/searchjobopening/${eachJob._id}`} style={{textDecoration:'none', color:'#A2A2A2'}}>
                 <div className="Job">
                 <div className="jobid">JO00{eachJob.JobID} - {eachJob?.ClientName} - {eachJob.JobTitle}</div>
                 <div className="d-flex flex-row">
                   <div className="col-md-1 client">
                     <i className="fa-solid fa-circle-user" id="user-icon" />
                   </div>
                   <div className="col assignee-name">Emily</div>
                   <div className="date mx-2 col-md-auto">10-08-2022</div>
                   <div className="time col-md-2">02:05pm</div>
                 </div>
               </div>
               </Link>
                )}
              </Col>

              <Col md={4}>
                {candidate?.data?.candidates?.length && candidate?.data?.candidates?.map((eachCandidate) =>
                <Link to={`/candidatedetails/${eachCandidate._id}`} style={{textDecoration:'none'}}>
                <div className="Candidate">
                  <Row>
                    <Col md={2}>
                      <span className="icon1">
                        <i
                          className="fa-solid fa-circle-user"
                          id="candidate-icon"
                        ></i>
                        <img src={eachCandidate?.Availability == "active" ? GreenTick : RedCross} className="tick-img" alt="..."/>
                      </span>
                    </Col>
                    <Col md={10}>
                      <div className="candid-status">{eachCandidate.Status}</div>
                      <div className="candidateId1">C00{eachCandidate.CandidateId}-{eachCandidate.Name}</div>
                      <div className="candidate-role">{eachCandidate.Role}</div>
                    </Col>
                  </Row>
                </div>
                </Link>
                )}

              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default RecruitDashboard;
