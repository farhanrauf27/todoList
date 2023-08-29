import { useEffect, useState } from "react"

const initailState={
    todo:' ',
    date:' ',
    id:' '
}
function AddTask({addTask,editTask,updateTask}){   
    const[task,setTask]=useState(initailState) 
   

    function handleClick(e){
        e.stopPropagation()
        e.preventDefault()
        if(editTask){
            updateTask(task)
        }else{
            addTask(task)
        }
        setTask(initailState)
        
    }
    function handleChange(e){
        e.stopPropagation()
        setTask({
            ...task,[e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        if(editTask){
            setTask(editTask)
        }
    },[editTask])
    return(
        <>
        <form Validate >
        <div className="container">
            <div class="input-group mb-3 ">
  <input onChange={handleChange} type="text" style={{border:'1px solid black'}} className="form-control" required name="todo"  value={task.todo} />
  <input onChange={handleChange} type="date" style={{border:'1px solid black'}} className=" mx-2 btn btn-light" required  name="date" value={task.date} />
            <button className="btn btn-light" style={{border:'1px solid black'}} onClick={handleClick}>{editTask?"Update ":"Add "} Task</button>
            
                </div>
        </div>
        </form>
        
        </>
    )
}

export default AddTask;