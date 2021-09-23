// Example of class Animal
/* class Animal {
  constructor(name) {
    this.name = name;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} стоит!`);
  }
}
class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name} прячется!`);
  }
  stop() {
    super.stop();
    this.hide();
  }
}
let rabbit = new Rabbit("Белый кролик", 10);
rabbit.run(7);
rabbit.stop();
console.log(rabbit.earLength); */

//Example of class Car
/* class Car {
  constructor(maker, model) {
    this.maker = maker;
    this.model = model;
  }
  drive() {
    console.log(`${this.model} разгоняется со скоростью ${this.maker}`);
  }
}

class Tesla extends Car {
  miles(permile) {
    this.permile = permile;
    console.log(
      `${this.model} разгоняется со скоростью ${this.permile} в милях`
    );
  }
}
let tesla = new Tesla("26 km/h", "Tesla");
tesla.drive();
tesla.miles(8882); */

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
import React from "react";

class Card extends React.PureComponent {
  constructor(props) {
    super(props);
    /* this.state = {
      name: `Task ${this.props.index}`,
    }; */
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

export default Card;
