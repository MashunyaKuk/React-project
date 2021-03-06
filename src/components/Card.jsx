import React, { memo, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ModalContext } from '../HOC/GlobalModalProvider';
import getCardDetailRoute from '../Route/routes';
import pen from '../assets/img/edit.png';
import EditModal from './ModalContent/EditModal';
import TASK_STATUS from '../constants/taskStatus';
import {
  toTopCard, toBottomCard, deleteCard, doneCard,
} from '../store/actions/cardsList';

const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 16px;
  
  .card-title-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
  }

  .card-name {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-right: 10px;
    cursor: pointer;
    font-size: 20px;
    line-height: 26px;
    color: #221c1d;
    text-align: left;
    text-decoration: none;
    transition: 0.4s;

    :hover {
      transform: scale(1.1) translate(4%, 4%);
    }
  }

  .edit-btn {
    font-size: 14px;
    background-color: rgb(255, 247, 171, 0.8);
    padding: 5px 5px 3px 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s;
      :hover {
        transform: scale(1.2, 1.2);
      }
  }

  .pen {
    width: 20px;
    height: 20px;
  }

  .card-description {
    text-align: left;
    margin: 0 0 8px 0;
  }

  .card-description_p {
    font-size: 16px;
    line-height: 22px;
    color: #5e5556;
    margin: 0;
  }

  .move-btn {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 8px;
  }

  .done-delete-btn {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    margin-bottom: 8px;
  }

  .btn {
    font-size: 14px;
    background-color: rgba(195, 245, 162, 0.8);
    padding: 8px 16px;
    color: rgb(34, 37, 37);
    border: none;
    border-radius: 4px;
    margin-right: 14px;
    cursor: pointer;
    transition: 0.4s;
      :hover {
        transform: scale(1.2, 1.2) translate(-8%, 8%);
      }
      :last-child {
        margin-right: 0px;
      }
  }

  .totop-btn {
    background-color: rgba(229, 194, 240, 0.8);
    
  }

  .tobottom-btn {
    background-color: rgba(183, 182, 238, 0.8);
      :hover {
        transform: scale(1.2, 1.2) translate(8%, 8%);
      }
  }

  .delete-btn {
    background-color: rgb(255, 179, 179, 0.8);
      :hover {
        transform: scale(1.2, 1.2) translate(8%, 8%);
      }
  }
`;

const Card = (props) => {
  const setModalContent = useContext(ModalContext);
  const dispatch = useDispatch();
  const {
    children, changeTask, taskName, isDone, index, taskDescription, state,
  } = props;
  // useEffect(() => { () => { };}, []);
  return (
    <StyledCard isDone={isDone}>
      <div className="card-title-wrapper">
        <Link to={getCardDetailRoute(index)} className="card-name">
          {`${taskName} is ${isDone ? 'done' : 'not Done'}`}
        </Link>
        {children}
        <button
          type="button"
          onClick={() => {
            setModalContent(
              <EditModal
                currentTaskName={taskName}
                currentTaskDescription={taskDescription}
                currentIndex={index}
                changeName={changeTask}
              />,
            );
          }}
          className="edit-btn"
        >
          <img src={pen} alt="logo" className="pen" />
        </button>
      </div>
      <div className="card-description">
        <p className="card-description_p">
          {`${taskDescription}`}
        </p>
      </div>
      <div className="move-btn">
        <button
          type="button"
          className="btn totop-btn"
          onClick={() => { dispatch(toTopCard(index)); }}
        >
          To top
        </button>
        <button
          type="button"
          className="btn tobottom-btn"
          onClick={() => { dispatch(toBottomCard(index)); }}
        >
          To bottom
        </button>
      </div>
      <div className="done-delete-btn">
        {state !== TASK_STATUS.done
          && (
            <button
              type="button"
              className="btn isdone-btn"
              onClick={() => { dispatch(doneCard(index)); }}
            >
              Done
            </button>
          )}
        <button
          type="button"
          className="btn delete-btn"
          onClick={() => { dispatch(deleteCard(index)); }}
        >
          Delete
        </button>
      </div>
    </StyledCard>
  );
};

export default memo(Card);
