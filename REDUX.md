# О redux

- redux - глобальный state, который находится вне приложения, к которому можно получить доступ из любой точки (этот функционал похож на context)

- immutable state - неизменяемый

- state состоит из последовательности state (каждый из которых появляется после определенного действия)

  state = {1:{taskName: 'Task1'}, 2:{taskName: 'Task to delete'}, 3:{taskName: 'Important task'}}

- react state = {taskName: 'Important task'} - только последнее состояние, а redux держит в памяти все состояния, к ним можно вернуться (undo например - перейти к предыдущему state)

- redux state запоминает метод, который привел к переходу к новому состоянию

- с помощью приложений можно реализовать undo/redo, thunk (асинхронно изменять state)

- reselect (как callback - следит, чтобы state каждый раз не обновлялся, т.к. store постоянно обновляется)

- persist (берет состояние 3:{taskName: 'Important task'}) кладет в => localStorage => store

- из минусов - очень много жрет памяти

# Основные понятия (структура)

- store - хранилище - список состояний компонентов

  store [state, state, state]

- action - объект с 2 свойствами type и payload

  action = {type:'change task name', payload:'new name'}

- type - читабельный string, который выносят в конст (как taskStatus.js)

- payload - читабельный string, тоже из константы - например список всех задич - надор данных

- actionCreator - функция, принимает значение (тип) и возвращает action

  const actionCreator = (newName) => {type:'change task name', payload:newName}

- reducer - объясняем для каждого типа действия (type), с помощью инфы (payload) как из старого типа state сделать новый - функция, которая получает (действия, предыдущий state), возвращает новый state - не глядя берет новый state (можем потерять данные) - создается для КАЖДОГО type (типа действий)

  reducer = (action, previousState) => {newState};

- dispatсh - кладем действие в него - store смотрит тип действия, находит соответствующий reducer, и вызывает его, передавая внутри действие и предыдущий state reducer = (action, previousState) - получает из него новый state и кладет в store, и всем компонентам раздает этот новый state (в качестве props)

  store.dispatсh(action);

- selector - функция, которая возвращает из store одно конкретное значение

  selector() => return store.taskName

HOCs для redux
useDispatch();
useSelector();

mapDispatchToProps(()=>{}, <Component props/>)
mapStateToProps((store)=>{taskName:store.taskName}, <Component taskName/>)props.taskName

# Работа

- Создаем папку store, в ней файл расширения js с любым названием, например initStore.js

- устанавливаем redux - npm install redux

- устанавливаем надстройку для реакта npm install react-redux

- создаем store ( и не забываем проимпортирвоать import { createStore } from 'redux') - передаем reducer(rootReducer) и начальное состояние (initialState) и экспортируем

  const initialState = {taskList: newTaskList};
  const rootReducer = (state, action) = {
  switch (action.type) {
  default: return {...state} //новый state из старого - не надо забывать, state б. = undefined, если что
  }
  }
  export const store = createStore(rootReducer, initialState);

- создаем глобальный HOC - GlobalStoreProvider.jsx

  import React from 'react';
  import { Provider } from 'react-redux';
  import { store } from 'initStore.js';

  const GlobalStoreProvider = (props) => {
  return (
  <Provider store={store}>
  {props.children}
  </Provider>
  )
  }

  export default GlobalStoreProvider;

- заворачиваем в App.jsx <GlobalStoreProvider></GlobalStoreProvider> внутрь BrouserRouter (не использует store)

- в Cardholder (у меня уже MainScene) вместо UseState taskList (удаляем) и кусок из useEffect, который использует кусок setTaskList (которого у нас нет)

  const taskList = UseSelector(store => store.taskList);

- создаем папку selectors в папке store и файл cardsList.js, в который переносим:

  export const cardListSelector = store => store.taskList

- и соответственно меняем (не забывая проимпортировать этот селектор)

  const taskList = UseSelector(cardListSelector);

- создаем новую директорию в папке store actions и файл cardsList.js - создаем actionCreator

  export const newCard = (newName) => {return({type: 'change task name', payload: newName})}

- в функцию addTask в CardHolder
  newCard(newTaskName);

- в const CardHolder (используем диспатч - чтобы с помощью reducer куда-то вернул)

  //берем store из контекста - вызываем один раз
  const dispatch = useDispatch();

- и меняем в функции addTask в CardHolder и убираем лишнее

  const addTask = () => {
  dispatch(newCard(newTaskName));
  setNewTaskname('');
  }

- добавить actionTypes.js в selectors (для типов action)

  export const CARD_LIST_ACTIONS = {add: 'add card to list'}

- в папке store actions и в файле cardsList.js

  import { CARD_LIST_ACTIONS } from actionTypes.js
  export const newCard = (newName) => {return({type: CARD_LIST_ACTIONS.add, payload: newName})}

- добавить в roodReducer в Switch (не забыть проимпорттировать)

  const rootReducer = (state, action) = {
  switch (action.type) {
  case (CARD_LIST_ACTIONS.add):
  let newTaskList = [...state.taskList]; //из addTask
  newTaskList.push({taskName: action.payload, isDone: false, taskDescription: newTaskDescription, state: state});
  return {...state,
  taskList: newTaskList};
  default: return {...state} //новый state из старого - не надо забывать, state б. = undefined, если что
  }
  }
