import { createApp, h, reactive } from 'vue';
import Observer from 'mobx-vue-lite';

import appStyles from './app.scss';
import App from './App.vue';

class AppElement extends HTMLElement {
  constructor() {
    super();
    this.app;

    // this.attachShadow({ mode: 'open' });
    const styleNode = document.createElement('style');
    styleNode.innerHTML = appStyles;
    this.styleNode = styleNode;
    const rootNode = document.createElement('div');
    rootNode.id = 'root';
    this.rootNode = rootNode;
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

    this.appendChild(this.styleNode);
    this.props = reactive({
      count: this.count,
    });
    this.app = createApp(() => h(App, this.props));
    this.app.use(Observer);
    this.app.mount(this.rootNode);
    this.appendChild(this.rootNode);
  }

  disconnectedCallback() {
    console.log('vue_todo_app: disconnectedCallback');
    this.app.unmount(this.rootNode);
  }
}

if (!customElements.get('vue-todo-app')) {
  console.log('define vue-todo-app');
  customElements.define('vue-todo-app', AppElement);
}
