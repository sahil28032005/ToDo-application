import React from 'react'
import {useState,useEffect} from 'react'
export default function Task(props) {
    const [status,toggleStatus]=useState(false)
    const handleToggling=() => {
        toggleStatus((!status));
        props.handleStatusChange(props.taskNo,!status);
    }
    return (
        <div className="card text-white m-3 bg-dark mb-3" style={{maxWidth:"18rem"}}>
            <div className="card-header">{"Task No"+props.taskNo}</div>
            <div className="card-body">
                <h5 className="card-title">{props.current}</h5>
                <input onChange={handleToggling} checked={props.status} type='checkbox'/>{props.status?"completed":" not completed"}
            </div>
        </div>
    )
}