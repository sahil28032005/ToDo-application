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

        
        console.log('Task list updated locally');

        // setCurrent("");
    }
    useEffect(() => {
        try {
            const storedTasks = localStorage.getItem("taskList");
            console.log("for first render only");
            if (storedTasks) {
                updateTaskList(JSON.parse(storedTasks));
            } else {
                console.log("No tasks found in local storage");
            }
        } catch (error) {
            console.error("Error retrieving data from local storage:", error);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList));
        console.log('again');
        console.log(taskList);
    }, [taskList]);

    const handleStatusChange = (id, status) => {
        const updatedTasks = taskList.map(task => {
            if (task.id === id) {
                return { ...task, isComplete: status }; // Update the status of the task with the matching id
            }
            return task;
        });
        updateTaskList(updatedTasks);//here actuall object returns and updated in actual array
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
