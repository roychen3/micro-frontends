import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux-todo-core';
import { Button } from 'micro-frontend-react-ui'
import { StyleSheetManager } from 'styled-components'

import Todo from './Todo.jsx';

export const AppContext = React.createContext();
const APP_NAME = 'react-todo-app2'
const App = ({ count }) => {
  return (
    <StyleSheetManager
      // namespace={APP_NAME} // if not open shadowRoot, can add namespace scope
      target={document.querySelector(APP_NAME).shadowRoot}
    >
      <Provider store={store}>
        <h1>React Todo App2</h1>
        {count}
        <Button>Normal</Button>
        <Button primary>Primary</Button>
        <Todo />
      </Provider>
    </StyleSheetManager>
  );
};

export default App;
