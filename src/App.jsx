import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {

    const [list, setList] = useState("");
    const [item, setItem] = useState([])

    const inputEvent = (e) => {
        console.log(e.target.value)
        setList(e.target.value)
    }
    const getItems = () => {
        setItem((oldItem) => {
            return [...oldItem, list]
        })
        setList("")
    }

    const DelItem = (id) => {
        setItem((oldItems) => {
            return oldItems.filter((arrElm, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="container">
                <div className="row my-5 justify-content-center" >
                    <div className="col-4 my-5 card bg-light shadow " >
                        <h1 className="text-center my-2">ToDo List</h1>
                        <div className="input-group  ps-3">
                            <input type="text" className="form-control " placeholder="Add a Items" aria-label="Recipient's username"
                                aria-describedby="button-addon2" onChange={inputEvent} name={list} value={list} />
                            <button className="btn btn-outline-success mx-2" type="button" id="button-addon2"
                                onClick={getItems}>Add</button>
                        </div>
                        <ul className="my-4 fs-5">
                            <h4>This are List</h4>
                            {item.map((itemValue, index) => {
                                return <ToDoList
                                    id={index}
                                    key={index}
                                    text={itemValue}
                                    setValue={DelItem}
                                />
                            })
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App

