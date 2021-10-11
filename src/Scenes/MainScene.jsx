import React, {useState, useEffect, useContext} from "react";
import Card from "../Components/Card";
import styled from "styled-components";
import { TASK_STATUS } from "../constants/taskStatus";
import CardHolder from "../Components/CardHolder/CardHolder";

const StyledMainScene = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;

    .board-card {
        width: 250px;
        border: 1px solid #e5e5e5;
        border-radius: 4px;
        padding: 16px;
        margin-bottom: 50px;
        margin-right: 40px;

        :last-child {
            margin-right: 0px;
        }
    }

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

    .usercard-title, .usercard-description {
        display: block;
        margin-bottom: 8px;
        border: 2px solid rgba(253, 229, 99, 0.8);
        font-size: 14px;
        color: rgb(34, 37, 37);
        width: calc(100% - 16px);
        height: 15px;
        font-family: Helvetica;
        padding: 5px 8px;

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

const MainScene = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    useEffect(() => {
        console.log('useEffect');
        new Promise((res, rej) => {
            res([{ taskName: "Task 1", isDone: false, taskDescription: "Task 1 description", state: TASK_STATUS.toDo},
            { taskName: "Task 2", isDone: false, taskDescription: "Task 1 description", state: TASK_STATUS.progress }, { taskName: "Task 3", isDone: true, taskDescription: "Task 3 description", state: TASK_STATUS.done }])
        }).then((data) => {
            setTaskList(data);
        })
        
    }, []);

    const addTask = (newTaskName, newTaskDescription, state) => {
        if (newTaskName !== '') {
            let newTaskList = [...taskList];
            newTaskList.push({taskName: newTaskName, isDone: false, taskDescription: newTaskDescription, state: state});
            setTaskList(newTaskList);
            setNewTaskName('');
            setNewTaskDescription('');
        }
        
    }
    
    const changeTaskName = (index, taskName, taskDescription) => {
        let resultTaskName = taskName;
        let resultTaskDescription = taskDescription;
        let newTaskList = [...taskList];
        newTaskList[index].taskName = resultTaskName;
        newTaskList[index].taskDescription = resultTaskDescription;
        setTaskList(newTaskList);
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
        newTaskList[index].state = TASK_STATUS.done;
        setTaskList(newTaskList);
    };


    return (
        <StyledMainScene>
            <CardHolder title={'To Do'} addTask={addTask} taskStatus={TASK_STATUS.toDo}>
                {taskList.map((task, index) => {
                    if (task.state === TASK_STATUS.toDo) {
                        return (
                    <Card key={task.taskName} taskName={task.taskName} isDone={task.isDone} index={index} toTop={toTop} toBottom ={toBottom} deleteTask={deleteTask} taskDone={taskDone} taskDescription={task.taskDescription} state={task.state} changeTaskName = {changeTaskName}>
                    </Card>
                )}
            })}
            </CardHolder>
            <CardHolder title={'In Progress'} addTask={addTask} taskStatus={TASK_STATUS.progress}>
                {taskList.map((task, index) => {
                    if (task.state === TASK_STATUS.progress) {
                        return (
                    <Card key={task.taskName} taskName={task.taskName} isDone={task.isDone} index={index} toTop={toTop} toBottom ={toBottom} deleteTask={deleteTask} taskDone={taskDone} taskDescription={task.taskDescription} state={task.state} changeTaskName = {changeTaskName}>
                    </Card>
                )
                    }
                })}
            </CardHolder>
            <CardHolder title={'Done'} addTask={addTask} taskStatus={TASK_STATUS.done}>
                {taskList.map((task, index) => {
                    if (task.state === TASK_STATUS.done) {
                    return (
                    <Card key={task.taskName} taskName={task.taskName} isDone={task.isDone} index={index} toTop={toTop} toBottom ={toBottom} deleteTask={deleteTask} taskDone={taskDone} taskDescription={task.taskDescription} state={task.state} changeTaskName = {changeTaskName}>
                    </Card>
                )
                    }
                })}
            </CardHolder>
        </StyledMainScene>
    )
}

export default MainScene;