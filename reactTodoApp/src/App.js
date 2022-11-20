import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux-todo-core';

import Todo from './Todo.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <h1>React Todo App</h1>
      <Todo />
    </Provider>
  );
};

export default App;
