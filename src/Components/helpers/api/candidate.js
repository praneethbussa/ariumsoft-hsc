import axios from "axios";

const url = "http://146.190.10.89:8000";
export const getAllCandidates = async () => {
  try {
    const { data } = await axios.get(`${url}/hsc/getAllCandidates`);
    return data;
  } catch (error) {}
};

export const getCandidateInfo = async (id) => {
  try {
    const { data } = await axios.get(`${url}/hsc/getCandidate/${id}`);
    return data;
  } catch (error) {}
};

export const saveCandidate = async (data) => {
    try {
      // await axios.post('http://localhost:3000', data, {headers:{"Content-Type": "multipart/form-data"}}).then((response) => {
      //   console.log(response.data);
      // });
      const saveCandidate = await axios.post(`${url}/hsc/createCandidate`, data, {headers:{"Content-Type": "multipart/form-data"}});
      return saveCandidate;
    } catch (error) {}
  };

export const updateCandidate = async (id, data) => {
    try {
      const editCandidate = await axios.patch(`${url}/hsc/updateCandidates/${id}`, data);
      return editCandidate;
    } catch (error) {}
  };
