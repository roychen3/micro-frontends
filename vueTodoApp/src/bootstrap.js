import { createApp } from 'vue';
import App from './App.vue';

import appStyles from './app.scss';

createApp(App).mount('#app');

class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    const styleNode = document.createElement('style');
    styleNode.innerHTML = appStyles;
    this.shadowRoot.appendChild(styleNode);
  }

  connectedCallback() {
    console.log('vue_todo_app: connectedCallback');
    const rootNode = document.createElement('div');
    rootNode.id = 'root';
    createApp(App).mount(rootNode);
    this.shadowRoot.appendChild(rootNode);
  }

  disconnectedCallback() {
    console.log('vue_todo_app: disconnectedCallback');
  }
}

if (!customElements.get('vue-todo-app')) {
  customElements.define('vue-todo-app', AppElement);
}
