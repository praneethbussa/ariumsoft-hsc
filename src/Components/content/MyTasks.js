import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

import Search from "../../Images/Search.svg";
import User from "../../Images/User.svg";
import Delete from "../../Images/Delete.svg";

import DeleteTask from "./DeleteTask";
import "./MyTasks.css";
import { getAllTasks, deleteTask, updateTask } from "../helpers/api/tasks";
import toast from 'react-hot-toast';

export default function MyTasks() {
  const [modalShow, setModalShow] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const { id } = useParams();
  const [activeTask, setActiveTask] = useState([]);
  const [activeTaskId, setActiveTaskId] = useState(id ? id : "");
  const [searchTasks, setSearchTasks] = useState([]);
  const [searchParams, setSearchParams] = useState({title:''});

  useEffect(() => {
    (async () => {
      const res= await getAllTasks();
      setAllTasks(res?.data?.Tasks)
      setSearchTasks(res?.data?.Tasks)
    })();
  }, []);

  const setFilterParams = (field, value) => {
    if(field == "title"){
      searchParams.title = value;
    }else{
      searchParams[field] = value;
    }
    setSearchParams(searchParams);
    filterTasks();
  }
  const filterTasks = () => { 
    const results = allTasks?.filter(function(item) {
      if(searchParams.title == ""){
        return true;
      } else if (searchParams.title != "") {
        if(item?.title?.toLowerCase().includes(searchParams.title) || 
        item?.role?.toLowerCase().includes(searchParams.title))
       {
          return true;
        }
    }
    return false;
    });
    setSearchTasks(results);
  }

  useEffect(() => {
    const getCurrentTask = allTasks?.find(task => id === task._id);
    if(getCurrentTask?.readstatus === "unread"){
      changeTaskStatus(getCurrentTask._id);
    }
    setActiveTask(getCurrentTask);
  }, [allTasks]);

  const changeTaskStatus = async (id) => {
    await updateTask(id, {"readstatus":"read"});
  }

  const showActiveTask = async (id) => {
    const getCurrentTask = allTasks?.find(task => id === task._id);
    setActiveTask(getCurrentTask);
    setActiveTaskId(id);
  };

  const deleteSelectedTask = async () => {
    const taskDelete = await deleteTask(activeTaskId);
    if(taskDelete){
        toast.success("Task deleted successfully")
    } else{
        toast.success("Error in deleting task")
    }
    setModalShow(false)
    const getUpdatedTaskList = await getAllTasks();
    setAllTasks(getUpdatedTaskList?.data?.Tasks);
    setSearchTasks(getUpdatedTaskList?.data?.Tasks);
  }

  return (
    <div className="col-md-10">
      <div className="bg-white pb-5 pt-4 px-4 content">
        <div className="d-flex flex-row">
          <h5 className="headings">MyTasks</h5>
          <div className="line"></div>
        </div>
        <div
          id="search"
          className="mx-2 px-3 d-flex flex-row position-relative"
        >
          <img
            className="h-50 position-relative my-3 mx-0 top-0 start-0"
            src={Search}
            alt={"Search"}
          />
          <input
            type="text"
            className="border-0 form-control search"
            placeholder="Search"
            onChange={e => setFilterParams("title", e.target.value.toLowerCase())}
          />
        </div>

        <div className="container">
        <div className="row">
            <div className="col-md-6">
              <div style={{ height: "96.5%" }} className="p-4 jobs mt-4">
                {searchTasks?.length &&
                  searchTasks?.map((eachTask) => (
                    <div
                      id="job1"
                      className={`inner p-3 mb-2 ${
                        activeTaskId === eachTask._id ? "activeTask" : ""
                      }`}
                      onClick={() => showActiveTask(eachTask._id)}
                    >
                      <div className="jobtitle">{eachTask?.title}</div>
                      <div className="d-flex flex-row mt-2">
                        <div className="col px-0 client">
                          <img src={User} alt={"User"} />
                          Ray
                        </div>
                        <div className="datetime mx-2 col-md-auto">
                          {eachTask?.createddate}
                        </div>
                        <div className="datetime col-md-2">
                          {eachTask?.createdtime}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-md-6 mt-4">
            {activeTask && <div className="h-100 jobs mb-5 px-4 pt-2 py-5">
                <div className="d-flex flex-row justify-content-between">
                  <div className="col-md-11 my-2 headings">
                    {activeTask?.title}
                  </div>
                  <Button
                    className="col-md-1"
                    variant="link"
                    onClick={() => setModalShow(true)}
                  >
                    <img src={Delete} alt={"Delete"} />
                  </Button>
                  <DeleteTask
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    onDelete={deleteSelectedTask}
                  />
                </div>
                <div className="details">
                {activeTask?.description}
                </div>
                <div className="jobtitle">
                {activeTask?.role}
                </div>
                <div className="mt-4 px-3 py-2 job-details">
                  <div className="my-2 subheadings">URL</div>
                  <a
                    className="url my-1"
                    href="www.indeed.com/recruitments/job.com"
                  >
                    {activeTask?.url}
                  </a>
                  <div className="my-2 subheadings">Due Date</div>
                  <div className="my-1 details">{activeTask?.date}</div>
                  <div className="my-2 subheadings">Positions to be filled</div>
                  <div className=" details">{activeTask?.positionstobefilled}</div>
                </div>
                <Link
                  to={"/createjobopening"}
                  className="mt-4 btn btn-primary col-lg-5 d-flex align-items-center justify-content-center"
                  id="save-task"
                >
                  Create Job Opening
                </Link>
              </div> }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
