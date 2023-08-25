function TodoForm(){
    function HandleType(e){
        e.stopPropagation()
        console.log(e.target.value)
    }
    return(
        <>
        <div className="container ">
            {/* <input type="text" placeholder="Type your Todo Task" /> */}
            <div class="input-group mb-3 ">
  <input onChange={HandleType} type="text" className="form-control " placeholder="Todo Task" />
  <input onChange={HandleType} type="date" className=" mx-2 btn btn-light" />
            <button className="btn btn-light">Add</button>
                </div>
        </div>
        </>
    )
}

export default TodoForm;