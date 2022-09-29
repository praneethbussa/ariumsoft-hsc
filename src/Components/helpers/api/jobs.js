import axios from "axios";

const url = "http://146.190.10.89:8000";
export const getAllJobOpenings = async () => {
  try {
   const {data} = await axios.get(`${url}/hsc/getAllJobOpenings`);
   return data;
  } catch (error) {}
};