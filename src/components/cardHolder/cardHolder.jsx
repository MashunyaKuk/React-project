import React, {useState, useEffect, useContext} from "react";
import Card from "../Card";
import ModalWindow from "../ModalWindow";
import {ModalContext} from "../../GlobalModalProvider";



//Functional Component
const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const setModalContent = useContext(ModalContext);
    // useEffect() = componentDidMount()
    useEffect(() => {
        console.log('useEffect');
        new Promise((res, rej) => {
            res([{ taskName: "Task 1", isDone: false },
            { taskName: "Task 2", isDone: false }])
        }).then((data) => {
            setTaskList(data);
        })
        
    }, []);

    const changeName = (index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].taskName = "Changed-name card";
        setTaskList(newTaskList);
      }

    const addTask = () => {
        let newTaskList = [...taskList];
        newTaskList.push({taskName: newTaskName, isDone: false});
        setTaskList(newTaskList);
        setNewTaskName('');
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
        <div className={'cardholder'}>
        {taskList.map((task, index) => {
            return (
                <div key={task.taskName}>
                <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={changeName} toTop={toTop} toBottom ={toBottom} deleteTask={deleteTask} taskDone={taskDone}>
                    <div>{index}</div>
                </Card>
                </div>
            )
        })}
        <div className="card">
        <textarea onChange={(event) => {setNewTaskName(event.target.value)}} value={newTaskName} id={'usercard-text'} rows='1'></textarea>
        <button className={"add-btn"} onClick={addTask}>Add new Task</button>
        </div>
        <button onClick ={ () => {setModalContent('Cardholder open')}}>
            Modal
        </button>
        </div>
    )
}

export default CardHolder;