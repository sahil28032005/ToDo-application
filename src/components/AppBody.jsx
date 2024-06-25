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
    console.log(current);
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
            isComplete: false,
            isEditable: false
        }
        updateTaskList([...taskList, obj]);
        setVisibility(false);


        console.log('Task list updated locally');

        setCurrent("");
    }
    useEffect(() => {
        console.log('first render only');
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
        console.log("first as well as ");
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
    const handleOnDelete = (id) => {
        console.log(id);
        const arr = taskList.filter((item) => item.id != id);
        console.log(arr);
        updateTaskList(arr);
        localStorage.setItem('taskList', JSON.stringify(arr));

    }
    const handleOnUpdate = (id) => {
        const updated = taskList.map((item) => {
            if (item.id === id) {
                item.isEditable = true;
                if (current != "") {
                    item.title = current;
                    item.isEditable = false;
                }
                return item;
            }
            else {
                item.isEditable = false;
                return item;
            }
        })
        console.log(updated);
        updateTaskList(updated);

    };

    return (
        <>
            <div className="add" onClick={openModal}><img src="./src/assets/icons8-plus.svg" alt="" /></div>
            <Modal handleOnUpdate={handleOnUpdate} adder={handleOnAdd} setCurrent={setCurrent} visibility={showModel} close={closeModal} />
            <div className='cardsContainer'>
                {
                    taskList.map((item) => {
                        return <Task currentState={current} setCurrent={setCurrent} handleOnUpdate={handleOnUpdate} isEditable={item.isEditable} visibility={setVisibility} handleOnDelete={handleOnDelete} handleStatusChange={handleStatusChange} key={item.id} taskNo={item.id} current={item.title} status={item.isComplete} />
                    })
                }
            </div>
        </>
    )
}
