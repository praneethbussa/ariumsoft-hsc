import React, { useState, useEffect } from "react";
import plusCircle from "../Images/plus-circle.svg";
import "../assets/CandidateInfo.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getCandidateInfo,
  saveCandidate,
  updateCandidate,
} from "./helpers/api/candidate";
import Select from "react-select";

const CandidateInfo = () => {
  const [file, setFile] = useState();
  const { id } = useParams();
  const [isAddMode, setIsAddMode] = useState(id ? false : true);
  const [candidateDetails, setCandidateDetails] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
 
  useEffect(() => {
    if (!isAddMode) {
      (async () => {
        setCandidateDetails(await getCandidateInfo(id));
      })();
    }
  }, []);

  useEffect(() => {
    [
      { name: "Name", value: candidateDetails?.results?.Name },
      { name: "Email", value: candidateDetails?.results?.Email },
      { name: "Mobile", value: candidateDetails?.results?.Mobile },
      {
        name: "StartdateofExclusivity",
        value: candidateDetails?.results?.StartdateofExclusivity,
      },
      { name: "AddressLine1", value: candidateDetails?.results?.AddressLine1 },
      { name: "AddressLine2", value: candidateDetails?.results?.AddressLine2 },
      { name: "City", value: candidateDetails?.results?.City },
      { name: "State", value: candidateDetails?.results?.State },
      { name: "Country", value: candidateDetails?.results?.Country },
      { name: "Zipcode", value: candidateDetails?.results?.Zipcode },
      { name: "Availability", value: candidateDetails?.results?.Availability },
      { name: "Role", value: candidateDetails?.results?.Role },
      { name: "Jobtype", value: candidateDetails?.results?.Jobtype },
      {
        name: "Qualification",
        value: candidateDetails?.results?.Qualification,
      },
      { name: "Experience", value: candidateDetails?.results?.Experience },
    ].forEach(({ name, value }) => {
      setValue(name, value);
    });
  }, [candidateDetails]);

  var Upload;
  const handleChange = (event) => {
    // e.target.files[0].filename = e.target.files[0].name;
    // console.log(e.target.files[0].filename)
    Upload = setFile(event.target.files[0]);
    console.log("Upload", Upload)
  };

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (isAddMode) {
      const formData = new FormData();
      // formData.append("file", Upload);
      //formData.append("body", data);
      formData.append("Name", data.Name);
      formData.append("Email", data.Email);
      formData.append("Mobile", data.Mobile);
      formData.append("StartdateofExclusivity", data.StartdateofExclusivity);
      formData.append("AddressLine1", data.AddressLine1);
      formData.append("AddressLine2", data.AddressLine2);
      formData.append("City", data.City);
      formData.append("State", data.State);
      formData.append("Country", data.Country);
      formData.append("Zipcode", data.Zipcode);
      formData.append("Availability", data.Availability);
      formData.append("Qualification", data.Qualification);
      formData.append("Experience", data.Experience);
      formData.append("Jobtype", data.Jobtype);
      formData.append("Role", data.Role);
      formData.append("Upload", data.Upload[0].name);
      const saveCandInfo = await saveCandidate(formData);
      if (saveCandInfo?.data?.status === "successfully created") {
        navigate("/candidates");
      }
    } else {
      const editCandidate = await updateCandidate(id, data);
      if (editCandidate?.data?.status === "success") {
        navigate("/candidates");
      }
    }
  };


  return (
    <div className="col-md-10 candidateInfo-page">
      <p className="candid-text">Candidate Information</p>
      <div className="contact-details">Contact Details</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-border">
          <div className="mb-1">
            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Name"
                  name="Name"
                  {...register("Name", { required: false })}
                />
                <label for="floatingInputValue">
                  Name<span className="mandatory">*</span>
                </label>
                {errors.Name?.type === "required" && (
                  <p role="alert" className="mandatory">
                    Name is required
                  </p>
                )}
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Email"
                  {...register("Email", { required: false })}
                />
                <label for="floatingInputValue">
                  Email<span className="mandatory">*</span>
                </label>
                {errors.Name?.type === "required" && (
                  <p role="alert" className="mandatory">
                    Email is required
                  </p>
                )}
              </div>
            </div>

            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Mobile"
                  {...register("Mobile", { required: false })}
                />
                <label for="floatingInputValue">
                  Mobile<span className="mandatory">*</span>
                </label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Address Line 1"
                  {...register("AddressLine1", { required: false })}
                />
                <label for="floatingInputValue">
                  Address Line 1<span className="mandatory">*</span>
                </label>
              </div>
              <div className="col-md-2 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Address Line 2"
                  {...register("AddressLine2")}
                />
                <label for="floatingInputValue">Address Line 2</label>
              </div>
            </div>

            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="City"
                  {...register("City", { required: false })}
                />
                <label for="floatingInputValue">
                  City<span className="mandatory">*</span>
                </label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="State"
                  {...register("State", { required: false })}
                />
                <label for="floatingInputValue">
                  State<span className="mandatory">*</span>
                </label>
              </div>
              <div className="col-md-2 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Country"
                  {...register("Country", { required: false })}
                />
                <label for="floatingInputValue">
                  Country<span className="mandatory">*</span>
                </label>
              </div>
            </div>

            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="number"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="ZipCode"
                  {...register("Zipcode", { required: false })}
                />
                <label for="floatingInputValue">
                  ZipCode<span className="mandatory">*</span>
                </label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("Availability", { required: false })}
                >
                  <option value="">All</option>
                  <option
                    value="active"
                    selected={
                      candidateDetails?.results?.Availability == "active"
                        ? "selected"
                        : ""
                    }
                  >
                    Active
                  </option>
                  <option
                    value="Inactive"
                    selected={
                      candidateDetails?.results?.Availability == "Inactive"
                        ? "selected"
                        : ""
                    }
                  >
                    In Active
                  </option>
                </select>
                <label for="floatingInputValue">
                  Availability<span className="mandatory">*</span>
                </label>
              </div>
            </div>

            <div className="job-prefer">Job Type preferred</div>

            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputValue"
                  placeholder="Role"
                  {...register("Role")}
                />
                <label for="floatingInputValue">Role</label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("Jobtype")}
                  defaultValue={candidateDetails?.results?.Jobtype}
                >
                  <option value="">Select</option>
                  <option
                    value="full time"
                    selected={
                      candidateDetails?.results?.Jobtype == "full time"
                        ? "selected"
                        : ""
                    }
                  >
                    Full Time
                  </option>
                  <option
                    value="part time"
                    selected={
                      candidateDetails?.results?.Jobtype == "part time"
                        ? "selected"
                        : ""
                    }
                  >
                    Part Time
                  </option>
                </select>
                <label for="floatingInputValue">Job Type</label>
              </div>
              <div className="col-md-3 form-floating">
                <input
                  type="date"
                  className="form-control"
                  id="floatingInputValue"
                  {...register("StartdateofExclusivity")}
                />
                <label for="floatingInputValue">
                  Start date for Exclusivity<span className="mandatory">*</span>
                </label>
              </div>
            </div>

            <div className="education-details">Education & Experience</div>

            <div className="d-flex flex-row my-2">
              <div className="col-md-3 form-floating">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("Qualification")}
                >
                  <option value="">Select</option>
                  <option
                    value="post graduate"
                    selected={
                      candidateDetails?.results?.Qualification ==
                      "post graduate"
                        ? "selected"
                        : ""
                    }
                  >
                    Post Graduate
                  </option>
                  <option
                    value="graduate"
                    selected={
                      candidateDetails?.results?.Qualification == "graduate"
                        ? "selected"
                        : ""
                    }
                  >
                    Graduate
                  </option>
                </select>
                <label for="floatingInputValue">Qualification</label>
              </div>
              <div className="col-md-3 mx-3 form-floating">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("Experience")}
                >
                  <option value="">Select</option>
                  <option
                    value="2-3 years"
                    selected={
                      candidateDetails?.results?.Experience == "2-3 years"
                        ? "selected"
                        : ""
                    }
                  >
                    2-3 years
                  </option>
                  <option
                    value="3-4 years"
                    selected={
                      candidateDetails?.results?.Experience == "3-4 years"
                        ? "selected"
                        : ""
                    }
                  >
                    3-4 years
                  </option>
                </select>
                <label for="floatingInputValue">Experience</label>
              </div>
            </div>

            <div className="my-2">
              <div className="notes">Notes</div>
              <div className="d-flex flex-row">
                <div className="col-md-4 type-area">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Type here..."
                    {...register("Notes")}
                  ></textarea>
                </div>
              </div>
            </div>

            {/* <div className="col-md-6">
              <label className="resume">Upload Resume<img src={plusCircle} alt="..." id="plus-icon"></img></label>
              <span className="resume-upload">Upload Resume</span>
              <img src={plusCircle} alt="..." id="plus-icon"></img>
              <input
                type="file"
                {...register("Upload")}
                onChange={handleChange}
              ></input>
            </div> */}
            <div className="col-md-6">
            <label className="resume">Upload Resume<img src={plusCircle} alt="..." id="plus-icon"></img></label>
            </div>

            <div className="format-file">
              <div className="checking-box">
                <input type="checkbox" id="check-box" />
              </div>
              <div className="checking-label">
                <label>HSC Formatted</label>
              </div>
            </div>
          </div>

          <div className="my-4">
            <div className="d-flex flex-row justify-content-between">
              <div className="col-md-3">
                <Link to={"/candidates"}>
                  <button type="button" className="cancel-btn">
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="col-md-3">
                <button type="submit" className="saving-button">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CandidateInfo;
