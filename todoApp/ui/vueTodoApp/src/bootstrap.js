import { createApp } from 'vue';
import Observer from 'mobx-vue-lite'

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
  }

  connectedCallback() {
    console.log('vue_todo_app: connectedCallback');
    const rootNode = document.createElement('div');
    rootNode.id = 'root';
    this.app = createApp(App);
    this.app.use(Observer);
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
