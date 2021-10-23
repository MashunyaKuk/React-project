/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Components/Card';
import TASK_STATUS from '../constants/taskStatus';
import CardHolder from '../Components/CardHolder/CardHolder';
import cardsListSelector from '../store/selectors/cardsListSelector';
import {
  newCard, toTopCard, toBottomCard, deleteCard, doneCard, changeCard,
} from '../store/actions/cardsList';
import CARD_LIST_ACTIONS from '../store/actionTypes';

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
`;

const MainScene = () => {
  const taskList = useSelector(cardsListSelector);
  const dispatch = useDispatch();
  const [, setNewTaskName] = useState('');
  const [, setNewTaskDescription] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    new Promise((res, rej) => {
      res([{
        taskName: 'Task 1', isDone: false, taskDescription: 'Task 1 description', state: TASK_STATUS.toDo,
      }, {
        taskName: 'Task 2', isDone: false, taskDescription: 'Task 1 description', state: TASK_STATUS.progress,
      }, {
        taskName: 'Task 3', isDone: true, taskDescription: 'Task 3 description', state: TASK_STATUS.done,
      }]);
      // eslint-disable-next-line no-unused-vars
    }).then((data) => {
    });
  }, []);

  const addTask = (newTaskName, newTaskDescription, state) => {
    if (newTaskName !== '') {
      dispatch(newCard(newTaskName, newTaskDescription, state));
      setNewTaskName('');
      setNewTaskDescription('');
    }
  };

  const changeTask = (index, taskName, taskDescription) => {
    dispatch(changeCard(index, taskName, taskDescription));
  };

  const toTop = (index) => () => {
    dispatch(toTopCard(index));
  };

  const toBottom = (index) => () => {
    dispatch(toBottomCard(index));
  };

  const deleteTask = (index) => () => {
    dispatch(deleteCard(index));
  };

  const taskDone = (index) => () => {
    dispatch(doneCard(index));
  };

  return (
    <StyledMainScene>
      <button
        type="button"
        onClick={() => { dispatch({ type: CARD_LIST_ACTIONS.undo }); }}
      >
        UNDO
      </button>
      <button
        type="button"
        onClick={() => { dispatch({ type: CARD_LIST_ACTIONS.redo }); }}
      >
        REDO
      </button>
      <CardHolder
        title="To Do"
        addTask={addTask}
        taskStatus={TASK_STATUS.toDo}
      >
        {taskList.map((task, index) => {
          if (task.state === TASK_STATUS.toDo) {
            return (
              <Card
                key={task.taskName}
                taskName={task.taskName}
                isDone={task.isDone}
                index={index}
                taskDescription={task.taskDescription}
                state={task.state}
              />
            );
          }
          return false;
        })}
      </CardHolder>
      <CardHolder
        title="In Progress"
        addTask={addTask}
        taskStatus={TASK_STATUS.progress}
      >
        {taskList.map((task, index) => {
          if (task.state === TASK_STATUS.progress) {
            return (
              <Card
                key={task.taskName}
                taskName={task.taskName}
                isDone={task.isDone}
                index={index}
                taskDescription={task.taskDescription}
                state={task.state}
              />
            );
          }
          return false;
        })}
      </CardHolder>
      <CardHolder
        title="Done"
        addTask={addTask}
        taskStatus={TASK_STATUS.done}
      >
        {taskList.map((task, index) => {
          if (task.state === TASK_STATUS.done) {
            return (
              <Card
                key={task.taskName}
                taskName={task.taskName}
                isDone={task.isDone}
                index={index}
                taskDescription={task.taskDescription}
                state={task.state}
              />
            );
          }
          return false;
        })}
      </CardHolder>
    </StyledMainScene>
  );
};

export default MainScene;
