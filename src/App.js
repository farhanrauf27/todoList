
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import initial from './data/data';


function App() {
  const [editTask, setEditTask] = useState(null);
  const[tasks,setTasks]=useState(initial)
  function addTask(t) {
    setTasks([...tasks, { ...t,id:tasks.length+1 }]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter(t=>t.id!==id))
  }
  function edit(id) {
    setEditTask(tasks.find(t=>t.id===id))
   }
   function update(task){
    const index=tasks.findIndex(t=>t.id===task.id)
    const updated=[...tasks]
    updated.splice(index,1,task)
    setTasks(updated)
    setEditTask(null)
   }
  
  return (
    <>
    <div className="yoxvv"></div>
    <div className="container-fluid my-2"  >
      <h1 style={{textAlign:'center'}} >Add Task</h1>
    <AddTask editTask={editTask} updateTask={update} addTask={addTask}></AddTask>
    </div>
    <div className='my-4'>
    <h1 style={{textAlign:'center'}} > Your Todo List</h1>
   <TaskList tasks={tasks} deleteTask={deleteTask} editTasks={edit}></TaskList>
   </div>

   </>
    
  );
}

export default App;
