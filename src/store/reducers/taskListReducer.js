import { CARD_LIST_ACTIONS } from "../actionTypes";
import { TASK_STATUS } from "../../constants/taskStatus";

const taskListReducer = (state, action) => {
  switch (action.type) {
    case CARD_LIST_ACTIONS.add:
      let newTaskList = [...state.taskList];
      newTaskList.push({
        taskName: action.payload.name,
        isDone: false,
        taskDescription: action.payload.description,
        state: action.payload.state,
      });
      return { ...state, taskList: newTaskList };

    case CARD_LIST_ACTIONS.toTop:
      newTaskList = [...state.taskList];
      newTaskList.sort(function (x, y) {
        return x == newTaskList[action.payload.index]
          ? -1
          : y == newTaskList[action.payload.index]
          ? 1
          : 0;
      });
      return { ...state, taskList: newTaskList };

    case CARD_LIST_ACTIONS.toBottom:
      newTaskList = [...state.taskList];
      newTaskList.sort(function (x, y) {
        return y == newTaskList[action.payload.index]
          ? -1
          : x == newTaskList[action.payload.index]
          ? 1
          : 0;
      });
      return { ...state, taskList: newTaskList };

    case CARD_LIST_ACTIONS.delete:
      newTaskList = [...state.taskList];
      newTaskList.splice(action.payload.index, 1);
      return { ...state, taskList: newTaskList };

    case CARD_LIST_ACTIONS.done:
      newTaskList = [...state.taskList];
      newTaskList[action.payload.index].isDone = true;
      newTaskList[action.payload.index].state = TASK_STATUS.done;
      return { ...state, taskList: newTaskList };

    case CARD_LIST_ACTIONS.change:
      let resultTaskName = action.payload.name;
      let resultTaskDescription = action.payload.description;
      newTaskList = [...state.taskList];
      newTaskList[action.payload.index].taskName = resultTaskName;
      newTaskList[action.payload.index].taskDescription = resultTaskDescription;
      return { ...state, taskList: newTaskList };

    default:
      return { ...state };
  }
};

export default taskListReducer;
