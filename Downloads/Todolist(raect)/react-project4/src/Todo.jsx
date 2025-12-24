import { useState } from "react";

export default function Todo(){
    let [todos,setTodos]=useState(["sample task"])
    let [newTask,setnewTask]=useState(" ")

    function UpdateTodos(){
        setTodos([...todos,newTask])
    }

    function UpdatenewTask(event){
        setnewTask(event.target.value)
    }

    return(
        <div>
            <input value={newTask} onChange={UpdatenewTask} ></input>
            <br></br>
            <br></br>
            <br></br>
            <button onClick={UpdateTodos} >Add</button>
            <h3>Todo List</h3>
            <ul>{todos.map((todo)=>(
                <li>{todo}</li>
            ))}
</ul>
            
            
        </div>
    )
}