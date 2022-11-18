import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import appStyles from './app.scss';
import Todo from './Todo.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <h1>React App</h1>
      <Todo />
    </Provider>
  );
};

class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const styleNode = document.createElement('style');
    styleNode.innerHTML = appStyles;
    this.shadowRoot.appendChild(styleNode);
  }
  connectedCallback() {
    console.log('app_1: connectedCallback');
    const rootNode = document.createElement('div');
    rootNode.id = 'root';
    ReactDOM.render(<App />, rootNode);
    this.shadowRoot.appendChild(rootNode);
  }
  disconnectedCallback() {
    console.log('app_1: disconnectedCallback');
    ReactDOM.unmountComponentAtNode(
      this.shadowRoot.getElementById('react-app')
    );
  }
}

if (!customElements.get('react-todo-app')) {
  console.log('define');
  customElements.define('react-todo-app', AppElement);
}

export default App;
