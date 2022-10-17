import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Addskill from "../../Images/Addskill.svg";
import { createJob, editJobOpening, getIndividualJobOpening } from "../helpers/api/jobs";
import "./CreateJobOpening.css";

export default function CreateJobOpening() {
  const [shown, setShown] = useState(false);
  const [JobDetails, setJobDetails] = useState();
  const { id } = useParams();
  const [isAddMode, setIsAddMode] = useState(id ? false : true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAddMode) {
      (async () => {
        setJobDetails(await getIndividualJobOpening(id));
      })();
    }
  }, []);

  useEffect(() => {
    [
      { name: "JobTitle", value: JobDetails?.JobTitle },
      { name: "ClientName", value: JobDetails?.ClientName },
      { name: "Location", value: JobDetails?.Location },
      { name: "Positionstohire", value: JobDetails?.Positionstohire },
      { name: "JobType", value: JobDetails?.JobType },
      { name: "Duedate", value: JobDetails?.Duedate },
      { name: "Experience", value: JobDetails?.Experience },
      { name: "Budget", value: JobDetails?.Budget },
      { name: "Jobdescription", value: JobDetails?.Jobdescription }
    ].forEach(({ name, value }) => {
      setValue(name, value);
    });
  }, [JobDetails]);

  const onSubmit = async (data) => {
    if (isAddMode) {
      const createJobOpening = await createJob(data);
      if (createJobOpening?.data?.status === "successfully created") {
        navigate("/searchjobopening");
      }
    } else {
        const editJob = await editJobOpening(id, data);
        if (editJob?.data?.status === "success") {
            navigate("/searchjobopening");
          }
    }
  };

  const handleClick = () => {
    setShown((current) => !current);
  };

  return (
    <div className="col-md-10">
      <div className="bg-white pb-1 pt-4 px-4 content">
        <div className="pb-2 d-flex flex-row">
          <h5 className="headings">Create Job Opening</h5>
          <div className="line"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-1">
            <div className="pb-2 heading">Contact Details</div>

            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Job Title"
                  name="JobTitle"
                  {...register("JobTitle", { required: false })}
                />
                <label for="floatingInputValue">Job Title</label>
              </div>
            </div>
            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Client Name"
                  {...register("ClientName", { required: false })}
                />
                <label for="floatingInputValue">Client Name</label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Location"
                  {...register("Location")}
                />
                <label for="floatingInputValue">Location</label>
              </div>
              <div className="col-md-2 form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Positions to hire"
                  {...register("Positionstohire")}
                />
                <label for="floatingInputValue">Positions to hire</label>
              </div>
            </div>
            <div className="d-flex flex-row">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Job Type"
                  {...register("JobType")}
                />
                <label for="floatingInputValue">Job Type</label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Due Date"
                  {...register("Duedate")}
                />
                <label for="floatingInputValue">Due Date</label>
              </div>
              <div className="col-md-2 form-floating">
                <select
                  id="select"
                  className="form-select"
                  aria-label="Default select example"
                  {...register("Experience")}
                >
                  <option value="">select</option>
                  <option
                    value="7-10 years"
                    selected={
                      JobDetails?.results?.Experience == "2-3 years"
                        ? "selected"
                        : ""
                    }
                  >
                    7-10 years
                  </option>
                  <option
                    value="2-3 years"
                    selected={
                      JobDetails?.results?.Experience == "2-3 years"
                        ? "selected"
                        : ""
                    }
                  >
                    2-3 years
                  </option>
                </select>
                <label for="floatingInputValue">Experience</label>
              </div>
            </div>
          </div>

          <div className="my-2">
            <div className="heading">Skills</div>
            <div className="d-flex flex-row my-3">
              <div className="col-md-4">
                <div className="form-floating input-group">
                  <input
                    type="text"
                    style={{ borderRightWidth: "0px" }}
                    className="form-control"
                    id="floatingInputValue"
                    placeholder="Add Skill"
                  />
                  <span className="input-group-text bg-white" id="basic-addon2">
                    <img
                      className="bg-white border-0"
                      onClick={handleClick}
                      src={Addskill}
                      alt={"Add skill"}
                    />
                  </span>
                  <label for="floatingInputValue">Add Skill</label>
                </div>
              </div>
            </div>

            {shown && (
              <div>
                <div className="skillname mb-3 mx-2">
                  You can only add up to five skills
                </div>
                <div className="d-flex flex-row">
                  <button
                    className="skills mx-1 rounded-pill px-2 d-flex align-items-center"
                    type="button"
                  >
                    Adobe Suite
                  </button>
                  <button
                    className="skills mx-1 rounded-pill px-2 d-flex align-items-center"
                    type="button"
                  >
                    Interaction
                  </button>
                  <button
                    className="skills mx-1 rounded-pill px-2 d-flex align-items-center"
                    type="button"
                  >
                    Information Architecture
                  </button>
                  <button
                    className="skills mx-1 rounded-pill px-2 d-flex align-items-center"
                    type="button"
                  >
                    Layout Design
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="my-2">
            <div className="heading">Budget</div>
            <div className="d-flex flex-row">
              <div className="col-md-3">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInputValue"
                    placeholder="CTC(Per Annum)"
                    {...register("Budget")}
                  />
                  <label for="floatingInputValue">CTC(Per Annum)</label>
                </div>
              </div>
            </div>
          </div>

          <div className="my-2">
            <div className="heading">Job Description</div>
            <div className="d-flex flex-row">
              <div className="col-md-7">
                <textarea
                  style={{ resize: "none", borderColor: "#F1F1F1" }}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Type Something..."
                  {...register("Jobdescription")}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="my-4">
            <div className="d-flex flex-row justify-content-between">
              <div className="col-md-3">
                <Link
                  to={"/mytasks"}
                  className="btn btn-primary bg-white d-flex align-items-center justify-content-center"
                  id="cancel"
                >
                  Cancel
                </Link>
              </div>
              <div className="col-md-3">
              <button type="submit" className="btn btn-primary d-flex align-items-center justify-content-center text-white" id='save'>Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
