import { useState } from "react"

const initailState={
    todo:' ',
    date:' ',
    id:' '
}
function AddTask({addTask}){   
    const[task,setTask]=useState(initailState) 
   

    function handleClick(e){
        e.stopPropagation()
        e.preventDefault()
        addTask(task)
        setTask(initailState)
        
    }
    function handleChange(e){
        e.stopPropagation()
        setTask({
            ...task,[e.target.name]:e.target.value
        })
    }
    return(
        <>
        <form >
        <div className="container ">
            {/* <input type="text" placeholder="Type your Todo Task" /> */}
            <div class="input-group mb-3 ">
  <input onChange={handleChange} type="text" className="form-control" required name="todo" placeholder="Todo Task" value={task.todo} />
  <input onChange={handleChange} type="date" className=" mx-2 btn btn-light" required name="date" value={task.date} />
            <button className="btn btn-light" onClick={handleClick}>Add</button>
            
                </div>
        </div>
        </form>
        
        </>
    )
}

export default AddTask;