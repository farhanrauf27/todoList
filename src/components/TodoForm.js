

function TodoForm(){
    

    function handleClick(){
        
    }
    function changeTask(e){
        e.stopPropagation()
    
    }
    function changeDate(e){
        e.stopPropagation()
    
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
        
        </>
    )
}

export default TodoForm;