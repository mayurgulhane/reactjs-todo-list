import React from "react"


const ToDoList = (props) => {
    return <li className="mx-4">{props.text}<button type="button" class="btn btn-danger btn-sm mx-3"
        onClick={() => {
            props.setValue(props.id)
        }}
    > X</button></li>
}
export default ToDoList;