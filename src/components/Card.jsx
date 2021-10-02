import React, { useEffect, memo, useContext } from "react";
import { ModalContext } from "../GlobalModalProvider";
import { getCardDetailRoute } from "../Route/routes";
import { Link } from "react-router-dom";

//Functional component
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
    <div className={"card"}>
      <Link to={getCardDetailRoute(props.index)}>
        <div className={"card-name"}>
          {`${props.taskName} is ${props.isDone ? "done" : "not Done"}`}
        </div>
      </Link>
      {props.children}
      <button className={"add-btn"} onClick={props.changeName(props.index)}>
        Change Taskname
      </button>
      <button className={"isdone-btn"} onClick={props.taskDone(props.index)}>
        Done
      </button>
      <button className={"totop-btn"} onClick={props.toTop(props.index)}>
        To top
      </button>
      <button className={"tobottom-btn"} onClick={props.toBottom(props.index)}>
        To bottom
      </button>
      <button className={"delete-btn"} onClick={props.deleteTask(props.index)}>
        Delete
      </button>
      <button
        onClick={() => {
          setModalContent("Card modal");
        }}
      >
        Modal card
      </button>
    </div>
  );
};

export default memo(Card);
