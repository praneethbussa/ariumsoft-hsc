import React from "react";
import "./SaveJob.css";

export default function SaveJob({candidateDetails}) {
  //const [jobOpeningsList, setJobOpeningsList] = useState([]);
  const jobOpeningsList = [
    { value: "J001", label: "JO001 - Interaction Designer" },
    { value: "need to be updated", label: "JO002 - Interaction Designer" },
  ];
  

//   useEffect(() => {
//     (async () => {
//       const res = await getJobOpeningsList();
//       setJobOpeningsList(res?.data?.candidates);
//     })();
//   }, []);

  return (
    <div className="d-flex flex-row my-5">
      <div className="col-3">
        <form className="form-floating">
          <select className="form-select" aria-label="Default select example">
            <option value="">Select</option>
            {jobOpeningsList?.length &&
              jobOpeningsList?.map((eachJob) => (
                <option value={eachJob.value} selected={candidateDetails.JobID == eachJob.value ? "selected" : ""}>{eachJob.label}</option>
              ))}
          </select>
          <label for="floatingInputValue">Job Opening</label>
        </form>
      </div>
      <div className="col-3 mx-2">
        <form className="form-floating">
          <select className="form-select" aria-label="Default select example">
            <option selected>Client Submitted</option>
            <option value="1">Hired</option>
            <option value="2">Rejected</option>
            <option value="3">Withdrawn</option>
            <option value="4">Interview Scheduled</option>
            <option value="5">On Hold</option>
          </select>
          <label for="floatingInputValue">Status</label>
        </form>
      </div>
    </div>
  );
}
