function TodoList(task,date,children){
    return(
        <>
        <div>
        <table class="table table-light table-hover table-bordered ">
  <thead>
    {children}
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
</table>
       
        </div>
       
        </>
    )
}
export default TodoList;