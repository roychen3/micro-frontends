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
    this.count = 0;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.count = newValue;
    const rootNode = this.shadowRoot.querySelector('#root')
    ReactDOM.render(<App count={newValue} />, rootNode);
  }

  static get observedAttributes() {
    return ['count'];
  }

  connectedCallback() {
    console.log('app_1: connectedCallback');
    const rootNode = document.createElement('div');
    rootNode.id = 'root';
    ReactDOM.render(<App count={this.count} />, rootNode);
    this.shadowRoot.appendChild(rootNode);
  }
  disconnectedCallback() {
    console.log('app_1: disconnectedCallback');
    ReactDOM.unmountComponentAtNode(this.shadowRoot.getElementById('root'));
  }
}

if (!customElements.get('react-todo-app2')) {
  console.log('define react-todo-app2');
  customElements.define('react-todo-app2', AppElement);
}
