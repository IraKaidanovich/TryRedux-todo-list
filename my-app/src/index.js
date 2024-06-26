import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/Store';
import App from './App';
import { addEmployee } from './app/features/employee/emloyeeSlice';
import {fetchTodos} from './app/features/todo/todoSlice'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addEmployee({name:'Jon', age:18}));


store.dispatch(fetchTodos());