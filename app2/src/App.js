import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>App 2</h1>
    </div>
  );
};

class AppElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    console.log('app_1: connectedCallback');
    ReactDOM.render(<App />, this.shadowRoot);
  }
  disconnectedCallback() {
    console.log('app_1: disconnectedCallback');
    ReactDOM.unmountComponentAtNode(this.shadowRoot);
  }
}

if (!customElements.get('app-2')) {
  console.log('define')
  customElements.define('app-2', AppElement);
}

export { AppElement };

export default App;
