import React, {useState} from "react";
import styled from "styled-components";
import { TASK_STATUS } from "../../constants/taskStatus";

const StyledCardHolder = styled.div`
    width: 250px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 16px;
    margin-right: 40px;

    :last-child {
            margin-right: 0px;
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

const CardHolder = (props) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    return (
        <StyledCardHolder>
            <div className={"board-card_title"}>
                <h2>
                    {props.title}
                </h2>
            </div>
            {props.children}
            {props.taskStatus !== TASK_STATUS.done &&
            <div className="card">
                <input
                    onChange={(event) => {setNewTaskName(event.target.value)}}
                    value={newTaskName}
                    className={'usercard-title'}
                    placeholder={'Your task name *'}/>
                <input
                onChange={(event) => {setNewTaskDescription(event.target.value)}}
                value={newTaskDescription}
                className={'usercard-description'}
                placeholder={'Your task description'}/>
                <button
                className={"add-btn"}
                onClick={() => {
                    props.addTask(newTaskName, newTaskDescription, props.taskStatus);
                    setNewTaskName('');
                    setNewTaskDescription('');
                }}>Add new Task</button>
            </div>
}
        </StyledCardHolder>
    )
}

export default CardHolder;