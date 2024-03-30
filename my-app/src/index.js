import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/ToDoStore';
import App from './App';
import { employeeReducer } from './redux/emloyeeSlice';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(employeeReducer({ name: "Narly", age: 45}))

