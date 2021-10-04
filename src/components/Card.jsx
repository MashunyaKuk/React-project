import React, { useEffect, memo, useContext } from "react";
import { ModalContext } from "../GlobalModalProvider";
import { getCardDetailRoute } from "../Route/routes";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    margin-bottom: 8px;
  }

  .card-name {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    font-size: 20px;
    line-height: 26px;
    color: #221c1d;
    text-align: left;
    text-decoration: none;
    transition: 0.2s;

    :hover {
      transform: scale(1.1) translate(5%, 5%);
      font-weight: bold;
    }
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
    justify-content: flex-start;
    margin-bottom: 8px;
  }

  .done-delete-btn {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
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
        transform: scale(1.2, 1.2) translate(8%, 8%);
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
  }

  .delete-btn {
    background-color: rgb(255, 179, 179, 0.8);
  }
`

const Card = (props) => {
  const setModalContent = useContext(ModalContext);
  useEffect(() => {
    console.log("useEffect", props.taskName);
    // = componentWillUnmount
    return () => {
      console.log("bue bue", props.taskName);
    };
  }, []);

  console.log("card render", props.taskName);

  return (
    <StyledCard isDone={props.isDone}>
      <div className={"card-title-wrapper"}>
        <Link to={getCardDetailRoute(props.index)} className={"card-name"}>
          {`${props.taskName} is ${props.isDone ? "done" : "not Done"}`}
        </Link>
        {props.children}
        <button
        onClick={() => {
          setModalContent("Card modal");
        }}>
        <img src="../assets/img/edit.png" />
      </button>
      </div>
      <div className={"card-description"}>
        <p className={"card-description_p"}>{`${props.taskDescription}`}
        </p>
      </div>
      <div className={"move-btn"}>
        <button className={"btn totop-btn"} onClick={props.toTop(props.index)}>
          To top
        </button>
        <button className={"btn tobottom-btn"} onClick={props.toBottom(props.index)}>
          To bottom
        </button>
      </div>
      <div className={"done-delete-btn"}>
        <button className={"btn isdone-btn"} onClick={props.taskDone(props.index)}>
          Done
        </button>
        <button className={"btn delete-btn"} onClick={props.deleteTask(props.index)}>
          Delete
        </button>
      </div>
    </StyledCard>
    
  );
};

export default memo(Card);
