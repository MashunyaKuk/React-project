import { CARD_LIST_ACTIONS } from "../actionTypes";

export const newCard = (newName, newDescription, state) => {
  return {
    type: CARD_LIST_ACTIONS.add,
    payload: {
      name: newName,
      description: newDescription,
      state: state,
    },
  };
};

export const toTopCard = (index) => {
  return {
    type: CARD_LIST_ACTIONS.toTop,
    payload: {
      index: index,
    },
  };
};

export const toBottomCard = (index) => {
  return {
    type: CARD_LIST_ACTIONS.toBottom,
    payload: {
      index: index,
    },
  };
};

export const deleteCard = (index) => {
  return {
    type: CARD_LIST_ACTIONS.delete,
    payload: {
      index: index,
    },
  };
};

export const doneCard = (index) => {
  return {
    type: CARD_LIST_ACTIONS.done,
    payload: {
      index: index,
    },
  };
};

export const changeCard = (index, taskName, taskDescription) => {
  return {
    type: CARD_LIST_ACTIONS.change,
    payload: {
      index: index,
      name: taskName,
      description: taskDescription,
    },
  };
};
