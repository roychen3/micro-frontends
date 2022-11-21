import React from 'react';
import ReactDOM from 'react-dom';

import appStyles from './app.scss';
import App from './App';

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
      this.shadowRoot.getElementById('root')
    );
  }
}

if (!customElements.get('react-todo-app')) {
  console.log('define react-todo-app');
  customElements.define('react-todo-app', AppElement);
}
