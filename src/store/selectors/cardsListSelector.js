export const cardsListSelector = (store) => {
  console.log("selector is", store.taskListReducer);
  return store.taskListReducer.present.taskList;
};
