import { useState } from "react";

function TodoForm(){
    const[text,setText]=useState(' ')
    const[date,setDate]=useState(' ')

    function handleClick(){
        
    }
    function changeTask(e){
        e.stopPropagation()
        setText(e.target.value)
    }
    function changeDate(e){
        e.stopPropagation()
        setDate(e.target.value)
    }
    return(
        <>
        <div className="container ">
            {/* <input type="text" placeholder="Type your Todo Task" /> */}
            <div class="input-group mb-3 ">
  <input onChange={changeTask} type="text" className="form-control" name="task" placeholder="Todo Task" />
  <input onChange={changeDate} type="date" className=" mx-2 btn btn-light" name="date" />
  
            <button className="btn btn-light" onClick={handleClick}>Add</button>
                </div>
        </div>
        <div>
        <table class="table table-light table-hover table-bordered ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{text}</td>
      <td>{date}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      {/* <td>Learn React</td>
      <td>27/6/23</td> */}
    </tr>
    
  </tbody>
</table>
       
        </div>
        </>
    )
}

export default TodoForm;