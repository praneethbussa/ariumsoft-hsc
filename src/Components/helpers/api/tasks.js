import axios from "axios";

const url = "http://146.190.10.89:8000";
export const getAllTasks = async () => {
  try {
   const {data} = await axios.get(`${url}/hsc/getAllTasks`);
   return data;
  } catch (error) {}
};

export const getIndividualTask = async (id) => {
  try {
   const {data} = await axios.get(`${url}/hsc/getTask/${id}`);
   return data?.Task;
  } catch (error) {}
};

export const deleteTask = async (id) => {
  try {
   await axios.delete(`${url}/hsc/deleteTask/${id}`);
   return true;
  } catch (error) {
    return false;
  }
};

export const updateTask = async (id, data) => {
  try {
   await axios.patch(`${url}/hsc/updatereadstatus/${id}`, data);
   return true;
  } catch (error) {
    return false;
  }
};
