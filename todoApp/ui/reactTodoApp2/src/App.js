import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux-todo-core';
import { Button } from 'micro-frontend-react-ui'

import Todo from './Todo.jsx';

export const AppContext = React.createContext();

const App = ({ count }) => {
  return (
    <Provider store={store}>
      <h1>React Todo App2</h1>
      {count}
      <Button>Normal</Button>
      <Button primary>Primary</Button>
      <Todo />
    </Provider>
  );
};

export default App;
