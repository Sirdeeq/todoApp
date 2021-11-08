import React from "react";

function Todo(props){
    const completedStyle = {
        fontStyle:"italic",
        color :"fade",
        textDecoration : "line-through"
    }
    return(
        <div className="todo-item">
            <input type="checkbox" 
             checked={props.items.completed}
             onChange={() => props.handleCheck(props.items.id)}
             />
            <p style={props.items.completed ? completedStyle : null}>{props.items.text}</p>
        </div>
    )
}

export default Todo;