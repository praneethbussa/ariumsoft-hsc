import React, { useState, useEffect } from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "../assets/Candidates.css";
import GreenTick from "../Images/greentick.svg";
import RedCross from "../Images/redcross.svg";
import CandidateInfo from "./CandidateInfo";
import { Route, Routes, Link } from "react-router-dom";
import { getAllCandidates } from "./helpers/api/candidate";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({Name:'', Role: '', Availability: ''});

  useEffect(() => {    
    (async () => {
      const res = await getAllCandidates();
      setCandidates(res?.data?.candidates);
      setSearchResults(res?.data?.candidates)
    })();
  }, []);

  const setFilterParams = (field, value) => {
    if(field == "Name"){
      searchParams.Name = value;
      searchParams.Role = value;
    }else{
      searchParams[field] = value;
    }
    console.log(searchParams)
    setSearchParams(searchParams);
    filterCandidates();
  }
  const filterCandidates = () => { 
    const results = candidates?.filter(function(item) {
      if(searchParams.Name == "" && searchParams.Availability == ""){
        return true;
      } else if (searchParams.Name != "" || searchParams.Availability != "") {
        if(item.Name.toLowerCase().includes(searchParams.Name) || 
        item.Role.toLowerCase().includes(searchParams.Role) || 
        item.CandidateId.toLowerCase().includes(searchParams.Name)){
          if(searchParams.Availability == ""){
            return true;
          } else if(searchParams.Availability != "" && item.Availability.toLowerCase() == searchParams.Availability){
            return true;
          } else {
            return false;
          }
        }
      }
      return false;
    });
    setSearchResults(results);  
  }

  return (
    <div className="col-md-10 candidate-screen">
      <Routes>
        <Route path="/candidates" element={<Candidates />} />
        <Route path="/candidates/addCandidate" element={<CandidateInfo />} />
        <Route
          path="/candidates/editcandidatedetails"
          element={<CandidateInfo />}
        />
      </Routes>
      <Row>
        <Col md={8}>
          <p className="candidate-text">Candidates</p>
        </Col>
        <Col md={4}>
          <span>
            <Link
              style={{ textDecoration: "none" }}
              to="/candidates/addCandidate"
            >
              <button type="button" className="add-button">
                Add candidate
              </button>
            </Link>
          </span>
        </Col>
      </Row>
      <Col md={12}>
        <div class="search-bar">
          <i class="fa fa-search"></i>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={e => setFilterParams("Name", e.target.value.toLowerCase())}
          ></input>
        </div>
      </Col>
      <Row>
        <Col md={2}>
          <div className="select-candidate">
            <FloatingLabel id="floatingSelectGrid" label="Candidate Type">
              <Form.Select>
                <option value="">All</option>
                <option value="my-candidates">My Candidates</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </Col>
        <Col md={2}>
          <div className="select-candidate">
            <FloatingLabel controlId="floatingSelectGrid" label="Availability">
              <Form.Select  onChange={e => setFilterParams("Availability", e.target.value.toLowerCase())}>
                <option value="">All</option>
                <option value="active">Active</option>
                <option value="Inactive">InActive</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </Col>
      </Row>

     
      <div className="candidate-block1">
        <Row>
          
          {searchResults?.map((eachCandidate) => 
          <Col md={4}>
            <Link to={`/candidatedetails/${eachCandidate._id}`} style={{ textDecoration: "none" }}>
              <div className="Candidate">
                <Row>
                  <Col md={3}>
                    <span className="icon1">
                      <i
                        className="fa-solid fa-circle-user"
                        id="candidate-icon"
                      ></i>
                      <img src={eachCandidate?.Availability == "active" ? GreenTick : RedCross} className="tick-img" alt="..." />
                    </span>
                  </Col>
                  <Col md={9}>
                    <div className="mt-2">
                      <div className="candidateId1">{eachCandidate.CandidateId} - {eachCandidate.Name}</div>
                      <div className="candidate-role">{eachCandidate.Role}</div>
                    </div>
                  </Col>
                  <Col>
                    <div className="candid-experience">
                      {eachCandidate.Experience}
                    </div>
                  </Col>
                  <Row>
                    <Col>
                      <span className="recruit">Williams</span>
                      <span className="exclusive">Exclusive</span>
                      <span className="until-date">{eachCandidate.StartdateofExclusivity}</span>
                    </Col>
                  </Row>
                </Row>
              </div>
            </Link>
            </Col>
            )}         

        </Row>
        
      </div>
    </div>
  );
};

export default Candidates;
