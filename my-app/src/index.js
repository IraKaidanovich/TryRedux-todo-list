import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store/Store';
import App from './App';
import { addEmployee } from './app/features/employee/emloyeeSlice';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addEmployee({name:'Jon'}));
store.dispatch({type: "Show_Error", payloud: {error: "User not found"}});

