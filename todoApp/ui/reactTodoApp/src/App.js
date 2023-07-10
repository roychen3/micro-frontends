import React from 'react';
import { store } from 'mobx-todo-core';
import { Button, StyleProvide } from 'micro-frontend-react-ui'
import { StyleSheetManager } from 'styled-components'

import Todo from './Todo.jsx';

export const AppContext = React.createContext();
const APP_NAME = 'react-todo-app'
const App = ({ count }) => {
  return (
    <StyleProvide
      container={document.querySelector(APP_NAME).shadowRoot}
      theme={
        {
          colors: {
            primary: '#61dafb',
          }
        }
      }
    >
      <StyleSheetManager
        // namespace={APP_NAME} // if not open shadowRoot, can add namespace scope
        target={document.querySelector(APP_NAME).shadowRoot}
      >
        <AppContext.Provider value={store}>
          <h1>React Todo App</h1>
          {count}
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <Todo />
        </AppContext.Provider>
      </StyleSheetManager>
    </StyleProvide>
  );
};

export default App;
