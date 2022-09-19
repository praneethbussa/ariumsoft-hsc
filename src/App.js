import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChangeStatus from './components/content/ChangeStatus'
import CreateJobOpening from './components/content/CreateJobOpening'
import JobOpening from './components/content/JobOpening'
import MyTasks from './components/content/MyTasks'
import SaveJob from './components/content/SaveJob'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Header/>
        <div className='d-flex flex-row justify-content-between'>
          <Navbar/>
          <Routes>
            {/* <Route exact path='/' element={}></Route> */}
            <Route path='/mytasks' element={<MyTasks/>}></Route>
            <Route path='/createjobopening' element={<CreateJobOpening/>}></Route>
            <Route path='/changestatus' element={<ChangeStatus/>}></Route>
            <Route path='/savejob' element={<SaveJob/>}></Route>
            <Route path='/searchjobopening' element={<JobOpening/>}></Route>
          </Routes>
        </div>
    </div>
  )
}

export default App
