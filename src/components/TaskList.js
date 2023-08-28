import Task from "./Task";

function TaskList({tasks,deleteTask}){
    return(
        <>
       {
       tasks.map((t)=>(
        <Task
        todo={t.todo}
        date={t.date}
        id={t.id}
        deleteTask={deleteTask}
        
        ></Task>
       )
        )
        }
        </>
    );
}

export default TaskList;