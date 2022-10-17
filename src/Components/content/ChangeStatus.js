import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Person from "../../Images/Person.svg";
import Tick from "../../Images/Tick.svg";
import Edit from "../../Images/Edit.svg";

import SaveJob from "./SaveJob";
import CandidateProfile from "./CandidateProfile";
import CandidateStatus from "../CandidateStatus";
import CandidateNotes from "../CandidateNotes";
import "./ChangeStatus.css";
import { getCandidateInfo } from "../helpers/api/candidate";

export default function ChangeStatus() {
  const [show, setShow] = useState(true);
  const hideButton = () => {
    setShow(false);
  };
  const [isShown, setIsShown] = useState(false);
  const showContent = () => {
    setIsShown(true);
  };
  const hideContent = () => {
    setIsShown(false);
    setShow(true);
  };
  const [profileShow, setShown] = useState(true);
  const profileClick = () => {
    setProfileActive(true);
    setStatusActive(false);
    setNotesActive(false);
    setShown(true);
    setStatus(false);
    setNotes(false);
  };
  const [statusShow, setStatus] = useState(false);
  const statusClick = () => {
    setStatus(true);
    setShown(false);
    setNotes(false);
    setStatusActive(true);
    setProfileActive(false);
    setNotesActive(false);
  };
  const [notesShow, setNotes] = useState(false);
  const notesClick = () => {
    setNotes(true);
    setShown(false);
    setStatus(false);
    setNotesActive(true);
    setProfileActive(false);
    setStatusActive(false);
  };
  const [isProfile, setProfileActive] = useState(true);
  const [isStatus, setStatusActive] = useState(false);
  const [isNotes, setNotesActive] = useState(false);
  const [candidateDetails, setCandidateDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setCandidateDetails(await getCandidateInfo(id));    
    })();
  }, []);
  
  return (
    <div className="col-sm-10">
      <div id="content" className="bg-white px-4">
        <div className="d-flex flex-row position-relative">
          <div className="d-flex flex-row">
            <div className="position-relative">
              <img className="mt-4 person" src={Person} alt={"User"} />
              <img
                className="mb-2 mx-1 position-absolute bottom-0 start-50 translate-end"
                src={Tick}
                alt={"Tick"}
              />
            </div>
            <div id="title" className="mx-2">
            {candidateDetails?.results?.Name}
            </div>
            <Link to={`/candidates/editcandidatedetails/${id}`}>
              <img className="edit" src={Edit} alt={"User"} />
            </Link>
          </div>
          {isShown && (
            <div className="w-25 position-absolute top-0 end-0 d-flex flex-row">
              <button
                onClick={hideContent}
                id="cancel"
                className="bg-white w-100 mx-2 btn btn-primary px-4 py-3"
              >
                Cancel
              </button>
              <Link
                to={"/"}
                id="button"
                className="w-100 btn btn-primary px-4 py-3"
              >
                Save
              </Link>
            </div>
          )}
          {show && (
            <button
              onClick={() => {
                hideButton();
                showContent();
              }}
              id="button"
              className="btn btn-primary px-4 py-3 position-absolute top-0 end-0"
            >
              Change Status
            </button>
          )}
        </div>
        <div id="role">{candidateDetails?.results?.Role}</div>
        <div className="my-2 status">{candidateDetails?.results?.Status}</div>
        {isShown && <SaveJob candidateDetails={candidateDetails?.results}/>}
        <div className="mt-3 d-flex flex-row">
          <div
            onClick={profileClick}
            style={{ color: isProfile ? "#0C0C0C" : "#A2A2A2" }}
            className="col-1"
          >
            Profile
          </div>
          <div
            onClick={statusClick}
            style={{ color: isStatus ? "#0C0C0C" : "#A2A2A2" }}
            className="col-1"
          >
            Status
          </div>
          <div
            onClick={notesClick}
            style={{ color: isNotes ? "#0C0C0C" : "#A2A2A2" }}
            className="col-1"
          >
            Notes
          </div>
        </div>
        {profileShow && <CandidateProfile candidateDetails={candidateDetails}/>}
        {statusShow && <CandidateStatus candidateDetails={candidateDetails}/>}
        {notesShow && <CandidateNotes candidateDetails={candidateDetails}/>}
      </div>
    </div>
  );
}
