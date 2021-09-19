import React from "react";
import Card from "../../modules/card";

class CardHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskList: [
                { taskName: "Task 1", isDone: false },
                { taskName: "Task 2", isDone: false },
              ]
        }
    }
    addTask = () => {
        let newTaskList = [...this.state.taskList];
        newTaskList.push({taskName: `Task ${this.state.taskList.length + 1}`, isDone: true});
        this.setState({taskList: newTaskList});
    }
    changeName = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].taskName = "Changed Task";
        this.setState({taskList: newTaskList});
    }
    render() {
        return (
            <div>
            <div>
            {this.state.taskList.map((task, index) => {
                return (
                    <div>
                    <Card taskName={task.taskName} isDone={task.isDone} />
                    <button onClick={this.changeName(index)}>Change Taskname</button>
                    </div>
                )
            })}
            </div>
            <button onClick={this.addTask}>Add new Task</button>
        </div>
        )
    }
}

export default CardHolder