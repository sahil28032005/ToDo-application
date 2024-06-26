import React from 'react'
import { useState, useEffect } from 'react'
export default function Task(props) {
    const [status, toggleStatus] = useState(false)
    const handleToggling = () => {
        toggleStatus((!status));
        props.handleStatusChange(props.taskNo, !status);
    }
    return (
        <div id='card' className="card text-white m-3 bg-dark mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-header">{"Task No" + props.taskNo}</div>
            <div id='cardBody' className="card-body">
                <h5 className="card-title">{props.current}</h5>

                <input onChange={handleToggling} checked={props.status} type='checkbox' />{props.status ? "completed" : " not completed"}<br />
                <div className="btnContainer">
                    <button onClick={() => props.handleOnDelete(props.taskNo)} type="button" className="btn btn-danger my-3">Delete</button>&nbsp;&nbsp;&nbsp;
                    <button type="button" onClick={() => {
                        props.handleOnUpdate(props.taskNo);
                        props.setCurrent("");
                    }} className="btn btn-success">Update</button>
                </div>
                {props.isEditable && <input type='text' onChange={(e) => { props.setCurrent(e.target.value) }} value={props.currentState} style={{ width: "100%" }}></input>}
                <label htmlFor="">Select Due Date</label>
                <input style={{ margin: "10px", alignSelf: "center" }} type='date'></input>
            </div>
        </div>
    )
}
