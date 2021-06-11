import React from "react"

const TodoItem = (props) => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-item">
            <input onChange={() => props.handleChange(props.item.id)} type="checkbox" checked={props.item.completed} />
            <p style={props.item.completed ? completedStyle : null}>
                {props.item.text}
            </p>
        </div>        
    )
}


export default TodoItem