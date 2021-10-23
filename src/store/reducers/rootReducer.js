import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import taskListReducer from './taskListReducer';
import CARD_LIST_ACTIONS from '../actionTypes';

const rootReducer = combineReducers({
  taskListReducer: undoable(taskListReducer, {
    undoType: CARD_LIST_ACTIONS.undo,
    redoType: CARD_LIST_ACTIONS.redo,
  }),
});

export default rootReducer;
