import React from "react";
import Card from "../card";

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
    changeName = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].taskName = "Changed-name card";
        this.setState({taskList: newTaskList});
      }
    addTask = () => {
        let newTaskList = [...this.state.taskList];
        let userCardName = document.getElementById('usercard-text');
        newTaskList.push({taskName: userCardName.value, isDone: false});
        this.setState({taskList: newTaskList});
        userCardName.value = '';
    }

    toTop = (index) => () => {
        let newTaskList = [...this.state.taskList];
        //newTaskList.unshift(newTaskList[index]); 
        //newTaskList.splice(newTaskList[index+1], 1);
        newTaskList.sort(function(x,y){  
            return x == newTaskList[index] ? -1 : y == newTaskList[index] ? 1 : 0;  
          });
        this.setState({taskList: newTaskList});
    }

    toBottom = (index) => () => {
        let newTaskList = [...this.state.taskList]; 
        newTaskList.sort(function(x,y){  
            return y == newTaskList[index] ? -1 : x == newTaskList[index] ? 1 : 0;  
          });
        this.setState({taskList: newTaskList});
    }

    deleteTask = (index) => () => {
        let newTaskList = [...this.state.taskList]; 
        newTaskList.splice(index, 1);
        this.setState({taskList: newTaskList});
    }

    taskDone = (index) => () => {
        let newTaskList = [...this.state.taskList];
        newTaskList[index].isDone = true;
        this.setState({taskList: newTaskList});
    }
    
    render() {
        return (
            <div className={'classholder'}>
            {this.state.taskList.map((task, index) => {
                //console.log('test', this.state.taskList);
                return (
                    <div key={task.taskName}>
                    <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={this.changeName} toTop={this.toTop} toBottom ={this.toBottom} deleteTask={this.deleteTask} taskDone={this.taskDone}/>
                    </div>
                )
            })}
            <div className="card">
            <textarea id={'usercard-text'} rows='1'></textarea>
            <button className={"add-btn"} onClick={this.addTask}>Add new Task</button>
            </div>
        </div>
        )
    }
}

export default CardHolder