import React from 'react'
import Modal from './Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import { useState, useEffect } from 'react'
export default function AppBody() {
    // const [count, setCount] = useState(0)
    const [showModel, setVisibility] = useState(false);
    const [taskList, updateTaskList] = useState([]);
    const [current, setCurrent] = useState("");
    const openModal = () => {
        setVisibility(true);
    }
    const closeModal = () => {
        setVisibility(false);
    }
    const handleOnAdd = () => {
        const obj = {
            id: taskList.length + 1,
            title: current,
            isComplete: false
        }
        updateTaskList([...taskList, obj]);
        setVisibility(false);
        setCurrent("");
    }
    useEffect(() => {
        console.log(taskList);
    }, [taskList]);

    const handleStatusChange = (id, status) => {
        const updatedTasks = taskList.map(task => {
            if (task.id === id) {
                return { ...task, isComplete: status }; // Update the status of the task with the matching id
            }
            return task;
        });
        updateTaskList(updatedTasks);
    }
    return (
        <>
            <div className="add" onClick={openModal}><img src="./src/assets/icons8-plus.svg" alt="" /></div>
            <Modal adder={handleOnAdd} setCurrent={setCurrent} visibility={showModel} close={closeModal} />
            <div className='cardsContainer'>
                {
                    taskList.map((item) => {
                        return <Task handleStatusChange={handleStatusChange} key={item.id} taskNo={item.id} current={item.title} status={item.isComplete} />
                    })
                }
            </div>
        </>
    )
}
