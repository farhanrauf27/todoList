
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import initial from './data/data';
import Register from './components/Register';
import Login from './components/Login';
import Task from './components/Task';


import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import Routes from "./components/Routes";
import { BrowserRouter as Router, 
  Routes, 
  Route, 
 } from "react-router-dom";

function App() {
  const[tasks,setTasks]=useState(initial)
  function addTask(t) {
    setTasks([...tasks, { ...t,id:tasks.length+1 }]);
  }
  function deleteTask(id) {
   
    setTasks(tasks.filter(video=>video.id!==id))
   
  }
  
  return (
    <>
    <Router>
    <Routes>
  
    <Route exact path="/login"  element={<Login></Login>} />
    <Route exact path="/register" element ={<Register/>}  />
    <Route exact path="/task"  element={<Task/>}  />
  </Routes>

  

<div className="App container">
       
       <Nav>
         <LinkContainer to="/register" className="btn btn-primary btn-block">
           <NavItem>Register</NavItem>
         </LinkContainer>
         <br />
         <LinkContainer to="/login" className="btn btn-primary btn-block">
           <NavItem>Login</NavItem>
         </LinkContainer>
       </Nav>
     
   <Routes />
   
 </div>



    <div className="container-fluid my-2"  >
      <h1 style={{textAlign:'center'}} >Add Task</h1>
    <AddTask addTask={addTask}></AddTask>
    </div>
    <div className='my-4'>
    <h1 style={{textAlign:'center'}} > Your Todo List</h1>
   <TaskList tasks={tasks} deleteTask={deleteTask}></TaskList>
   </div>
   {/* <Register></Register>
   <Login></Login> */}
   </Router>
   </>
    
  );
}

export default App;
