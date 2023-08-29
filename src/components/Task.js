import './Task.css'
import pic from './trash.svg'
import pic2 from './edit.svg'
function Task({todo,date,id,deleteTask,editTasks}){
  
    return(
        <>
<div className="container" style={{backgroundColor: '#ecedf6'}}>  
<div className="d-flex " style={{justifyContent:'flex-start',backgroundColor:'white'}}>
<p>{id}. {todo}  </p>
<p>{date}</p>
</div>
<div className="d-flex my-2 " style={{justifyContent:'flex-end'}}>
<button className="mx-2 btn" style={{backgroundColor:'#eee'}} onClick={()=>editTasks(id)}><img src={pic2}/></button> 
<button className="mx-2 btn" style={{backgroundColor:'#eee'}} onClick={()=>deleteTask(id)}><img src={pic}></img></button>
</div> </div>
        
        </>
    )
}
export default Task;