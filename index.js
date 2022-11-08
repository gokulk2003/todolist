import ReactDOM from "react-dom";
import React,{ useState } from "react";
import "./index.css";
 
const AddTask=({addTask})=>{
  const [value,updatevalue]=useState("");

const handleSubmit=e=>{
  e.preventDefault();
  if(value!==""){
    addTask(value);
    updatevalue("");
  }
}
return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={value} placeholder="Enter your task todo"
    onChange={e=>updatevalue(e.target.value)}/>
    <button type="submit"><i class="material-icons">add</i></button>
  </form>
);
}



const ToDoList=()=>{
  const addTask=text=>upadateTask([...tasks,{text}]);
  const [tasks,upadateTask]=useState([
    {text:"C",
    isCompleted:false},
    {
      text:"python",
      isCompleted:false
    },
    {
      text:"java",
      isCompleted:false
    }
  ]);
  const toggleTask=index=>{
    const newTask=[...tasks];
    if(newTask[index].isCompleted){
      newTask[index].isCompleted=false;
    }
    else{
      newTask[index].isCompleted=true;
    }
    upadateTask(newTask);
  }
  const removeTask=index=>{
    const newTask=[...tasks];
    newTask.splice(index,1);
    upadateTask(newTask);
  }
  return(
    <div className="list-of-tasks-todo">
      {tasks.map((task,index)=>(
        <div className="task-status">
          <span onClick={()=>toggleTask(index)} className={task.isCompleted? "task-name completed-task":"task-name"}>
          
          {task.text}
          </span>
          <button onClick={()=>removeTask(index)}><i class="material-icons">delete</i></button>
        </div>
      ))}
      <AddTask addTask={addTask}/>
    </div>
  );
}
ReactDOM.render(<ToDoList/>,document.getElementById('root'));