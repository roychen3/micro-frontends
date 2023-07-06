import { createApp, h, reactive } from 'vue';
import { store } from 'redux-todo-core';

import appStyles from './app.scss';
import App from './App.vue';

class AppElement extends HTMLElement {
  constructor() {
    super();
    this.app;

    this.attachShadow({ mode: 'open' });
    const styleNode = document.createElement('style');
    styleNode.innerHTML = appStyles;
    this.shadowRoot.appendChild(styleNode);
    this.count = 0;
    this.props = {};
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.count = newValue;
    this.props.count = newValue;
  }

  static get observedAttributes() {
    return ['count'];
  }

  connectedCallback() {
    console.log('vue_todo_app: connectedCallback');
    const rootNode = document.createElement('div');
    rootNode.id = 'root';

    this.props = reactive({
      count: this.count,
    });
    this.app = createApp(() => h(App, this.props));
    this.app.use(store);
    this.app.mount(rootNode);
    this.shadowRoot.appendChild(rootNode);
  }

  disconnectedCallback() {
    console.log('vue_todo_app: disconnectedCallback');
    this.app.unmount(this.shadowRoot.querySelector('#root'));
  }
}

if (!customElements.get('vue-todo-app')) {
  console.log('defin vue-todo-app');
  customElements.define('vue-todo-app', AppElement);
}
