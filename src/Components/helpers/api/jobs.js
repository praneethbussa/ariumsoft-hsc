import axios from "axios";

const url = "http://146.190.10.89:8000";
export const getAllJobOpenings = async () => {
  try {
   const {data} = await axios.get(`${url}/hsc/getAllJobOpenings`);
   return data;
  } catch (error) {}
};

export const getIndividualJobOpening = async (id) => {
  try {
   const {data} = await axios.get(`${url}/hsc/getJobOpening/${id}`);
   return data?.data?.jobopening;
  } catch (error) {}
};

export const deleteJobOpening = async (id) => {
  try {
   await axios.delete(`${url}/hsc/deleteJobOpening/${id}`);
   return true;
  } catch (error) {
    return false;
  }
};

export const createJob = async (data) => {
  try {
    const createJobOpening = await axios.post(`${url}/hsc/createJobOpening`, data );
    return createJobOpening;
  } catch (error) {}
};

export const editJobOpening = async (id, data) => {
  try {
    const editJobOpening = await axios.patch(`${url}/hsc/updateJobOpenings/${id}`, data);
    return editJobOpening;
  } catch (error) {}
};