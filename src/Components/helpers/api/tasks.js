import axios from "axios";

const url = "http://146.190.10.89:8000";
export const getAllTasks = async () => {
  try {
   const {data} = await axios.get(`${url}/hsc/getAllTasks`);
   return data;
  } catch (error) {}
};
