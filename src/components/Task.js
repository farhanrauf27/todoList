function Task({todo,date,id,deleteTask}){
    return(
        <>
        <div>
        {/* <table class="table table-light table-hover table-bordered ">
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
      <td>{task}</td>
      <td>{date}</td>
    </tr>
  </tbody>
</table> */}
<h1>{id}. {todo} {date}

<button className="mx-2 btn btn-info">Edit</button> <button className="mx-2 btn btn-danger" onClick={()=>deleteTask(id)}>Delete</button>
</h1> 

       
        </div>
       
        </>
    )
}
export default Task;