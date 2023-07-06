import React from 'react';
import ReactDOM from 'react-dom';

import appStyles from './app.scss';
import App from './App';

class AppElement extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' });
    const styleNode = document.createElement('style');
    styleNode.innerHTML = appStyles;
    this.styleNode = styleNode
    const rootNode = document.createElement('div');
    rootNode.id = 'root';
    this.rootNode = rootNode
    this.count = 0;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.count = newValue;
    ReactDOM.render(<App count={newValue} />, this.rootNode);
  }

  static get observedAttributes() {
    return ['count'];
  }

  connectedCallback() {
    console.log('app_1: connectedCallback');
    this.appendChild(this.styleNode);
    this.appendChild(this.rootNode);
    ReactDOM.render(<App count={this.count} />, this.rootNode);
  }
  disconnectedCallback() {
    console.log('app_1: disconnectedCallback');
    ReactDOM.unmountComponentAtNode(this.rootNode);
  }
}

if (!customElements.get('react-todo-app')) {
  console.log('define react-todo-app');
  customElements.define('react-todo-app', AppElement);
}
