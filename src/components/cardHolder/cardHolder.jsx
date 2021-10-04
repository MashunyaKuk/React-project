import React, {useState, useEffect, useContext} from "react";
import Card from "../Card";
import ModalWindow from "../ModalWindow";
import {ModalContext} from "../../GlobalModalProvider";
import styled from "styled-components";

const StyledCardHolder = styled.div`
    width: 298px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 16px;
    margin-bottom: 50px;
    margin-right: 40px;
    
    .board-card_title {
     padding: 5px 0;
        
     h2 {
        margin: 0 0 5px 0;
        font-size: 20px;
        line-height: 24px;
        color: #ffffff;
      }
    }

    .card {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 4px;
        padding: 12px;
        margin-bottom: 16px;
    }

    #usercard-title, #usercard-description {
        display: block;
        margin-bottom: 8px;
        border: 2px solid rgba(253, 229, 99, 0.8);
        font-size: 14px;
        color: rgb(34, 37, 37);
        width: calc(100% - 8px);
        font-family: Helvetica;

        :focus {
            outline: none;
            border-color: rgba(183, 182, 238, 0.8);
            box-shadow: 0 0 10px rgba(183, 182, 238, 0.8);
        }
    }

    
    .add-btn {
        font-size: 14px;
        background-color: rgba(253, 229, 99, 0.8);
        padding: 10px;
        color: rgb(34, 37, 37);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.4s;

        :hover {
            transform: scale(1.2, 1.2) translate(8%, 8%);
        }
      }
}
`

const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');
    //const setModalContent = useContext(ModalContext);
    // useEffect() = componentDidMount()
    useEffect(() => {
        console.log('useEffect');
        new Promise((res, rej) => {
            res([{ taskName: "Task 1", isDone: false, taskDescription: "Task 1 description" },
            { taskName: "Task 2", isDone: false, taskDescription: "Task 1 description" }])
        }).then((data) => {
            setTaskList(data);
        })
        
    }, []);

    const addTask = () => {
        let newTaskList = [...taskList];
        newTaskList.push({taskName: newTaskName, isDone: false, taskDescription: newTaskDescription});
        setTaskList(newTaskList);
        setNewTaskName('');
        setNewTaskDescription('');
    }

    const toTop = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList.sort(function(x,y){  
            return x == newTaskList[index] ? -1 : y == newTaskList[index] ? 1 : 0;  
          });
        setTaskList(newTaskList);
        }

    const toBottom = (index) => () => {
        let newTaskList = [...taskList]; 
        newTaskList.sort(function(x,y){  
            return y == newTaskList[index] ? -1 : x == newTaskList[index] ? 1 : 0;  
          });
          setTaskList(newTaskList);
    };

    const deleteTask = (index) => () => {
        let newTaskList = [...taskList]; 
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    };

    const taskDone = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = true;
        setTaskList(newTaskList);
    };

    console.log("cardholder render");

    return (
        <StyledCardHolder>
            <div class="board-card_title">
                <h2>
                To Do
                </h2>
            </div>
        {taskList.map((task, index) => {
            return (
                <div key={task.taskName}>
                <Card taskName={task.taskName} isDone={task.isDone} index={index} toTop={toTop} toBottom ={toBottom} deleteTask={deleteTask} taskDone={taskDone} taskDescription={task.taskDescription}>
                </Card>
                </div>
            )
        })}
        
        <div className="card">
        <textarea onChange={(event) => {setNewTaskName(event.target.value)}} value={newTaskName} id={'usercard-title'} rows='1' placeholder={'Your task name'}></textarea>
        <textarea onChange={(event) => {setNewTaskDescription(event.target.value)}} value={newTaskDescription} id={'usercard-description'} rows='1' placeholder={'Your task description'}></textarea>
        <button className={"add-btn"} onClick={addTask}>Add new Task</button>
        </div>
        <button onClick ={ () => {setModalContent('Cardholder open')}}>
            Modal
        </button>
        </StyledCardHolder>
    )
}

export default CardHolder;