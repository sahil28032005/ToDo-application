import React, { useState } from 'react'
import './components.css';
export default function Modal(props) {
    return (
        props.visibility && <div id="customDesign" className="card" style={{width:"25rem"}}>
            <img className="card-img-top" src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708473600&semt=ais" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Add your task</h5>
                    <input onChange={(e)=>{props.setCurrent(e.target.value)}} value={props.current} placeholder='enter here...' type='text' className="card-text my-3" style={{width:"100%",padding:"10px"}}></input>
                    <br/>
                    <a href="#" onClick={props.adder} className="btn btn-primary">Add</a>
                    <a href="#" onClick={props.close} className="btn btn-primary mx-4">close</a>
                    <button type="button" className="btn btn-success">Update</button>
                </div>
        </div>
    )
}
