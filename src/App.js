
import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import data from './data/data';
import TodoList from './components/TodoList';

function App() {
  const [task,setTask]=useState(data)
  return (
    <div className="container-fluid my-2"  >
      <h1 style={{textAlign:'center'}} > Your Todo List</h1>
      
    <TodoForm></TodoForm>
    
    <div>
        <button onClick={()=>{
           setTask("HEY") 
        }}>Adds</button>
      </div>


    {
      task.map((t)=>(
        <TodoList
        task={t.task}
        date={t.date}
        >
          Hwy
        </TodoList>
      ))
    }
    
    
    </div>
  );
}

export default App;
