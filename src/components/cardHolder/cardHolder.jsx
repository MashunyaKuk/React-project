import React, {useState, useEffect, useCallback, useRef} from "react";
import Card from "../card";
import ModalWindow from "../modalWindow";

//Class Component
/* class CardHolder extends React.Component {
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

export default CardHolder */

//Functional Component
const CardHolder = (props) => {
    const [taskList, setTaskList] = useState([]);
    const nameRef = useRef();
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
        console.log('testing refs', nameRef.current.value);
        let newTaskList = [...taskList];
        newTaskList.push({taskName: nameRef.current.value, isDone: false});
        setTaskList(newTaskList);
        nameRef.current.value = '';
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

    const deleteTask = useCallback((index) => () => {
        let newTaskList = [...taskList]; 
        newTaskList.splice(index, 1);
        setTaskList(newTaskList);
    }, [taskList]);

    const taskDone = useCallback((index) => () => {
        let newTaskList = [...taskList];
        newTaskList[index].isDone = true;
        setTaskList(newTaskList);
    }, [taskList]);

    console.log("cardholder render");

    return (
        <div className={'cardholder'}>
        {taskList.map((task, index) => {
            return (
                <div key={task.taskName}>
                <Card taskName={task.taskName} isDone={task.isDone} index={index} changeName={changeName} toTop={toTop} toBottom ={toBottom} deleteTask={deleteTask} taskDone={taskDone} setIsModalOpen={props.setIsModalOpen}>
                    <div>{index}</div>
                </Card>
                </div>
            )
        })}
        <div className="card">
        <textarea ref={nameRef} id={'usercard-text'} rows='1'></textarea>
        <button className={"add-btn"} onClick={addTask}>Add new Task</button>
        </div>
        <button onClick ={ () => {props.setIsModalOpen('Cardholder open')}}>
            Modal
        </button>
        </div>
    )
}

export default CardHolder;