//Simple JS

/* class Card {
  constructor(taskName, isDone, rootElement) {
    this.card = document.createElement("div");
    this.card.innerText = `Task ${taskName} is ${isDone ? "done" : "notDone"}`;
    rootElement.appendChild(this.card);
  }
  changeName(newTaskName, newIsDone) {
    this.card.innerText = `New ${newTaskName} is ${
      newIsDone ? "done" : "notDone"
    }`;
  }
}

export default Card;
 */

//React
import React, { useEffect, memo } from "react";

//Class component
/* class Card extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("card render", this.props.taskName);
    return (
      <div className={"card"}>
        <div className={"card-name"}>
          {`${this.props.taskName} is ${
            this.props.isDone ? "done" : "not Done"
          }`}
        </div>
        <button
          className={"add-btn"}
          onClick={this.props.changeName(this.props.index)}
        >
          Change Taskname
        </button>
        <button
          className={"isdone-btn"}
          onClick={this.props.taskDone(this.props.index)}
        >
          Done
        </button>
        <button
          className={"totop-btn"}
          onClick={this.props.toTop(this.props.index)}
        >
          To top
        </button>
        <button
          className={"tobottom-btn"}
          onClick={this.props.toBottom(this.props.index)}
        >
          To bottom
        </button>
        <button
          className={"delete-btn"}
          onClick={this.props.deleteTask(this.props.index)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card; */

//Functional component
const Card = (props) => {
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
      <div className={"card-name"}>
        {`${props.taskName} is ${props.isDone ? "done" : "not Done"}`}
      </div>
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
          props.setIsModalOpen("Card modal");
        }}
      >
        Modal card
      </button>
    </div>
  );
};

export default memo(Card);
