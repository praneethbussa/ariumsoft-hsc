import axios from "axios";

const url = "http://146.190.10.89:8000";
export const getAllCandidates = async () => {
  try {
   const {data} = await axios.get(`${url}/hsc/getAllCandidates`);
   return data;
  } catch (error) {}
};

export const getCandidateInfo = async (id) => {
    try {
     const {data} = await axios.get(`${url}/hsc/getCandidate/${id}`);
     return data;
    } catch (error) {}
  };