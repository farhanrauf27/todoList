import Task from "./Task";

function TaskList({tasks,deleteTask,editTasks}){
    return(
        <>
    
       {
       tasks.map((t)=>(
        
        <Task
        todo={t.todo}
        date={t.date}
        id={t.id}
        deleteTask={deleteTask}
        editTasks={editTasks}
        
        ></Task>
       )
        )
        }
        </>
    );
}

export default TaskList;