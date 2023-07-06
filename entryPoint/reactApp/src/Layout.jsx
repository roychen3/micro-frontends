import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="head">
        <div className="container">
          <h1 className="title">React Menu App</h1>
        </div>
      </header>
      <aside className="aside">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="react-todo-app">ReactTodoApp</Link>
          </li>
          <li className="menu-item">
            <Link to="react-todo-app2">ReactTodoApp2</Link>
          </li>
          <li className="menu-item">
            <Link to="vue-todo-app">VueTodoApp</Link>
          </li>
        </ul>
      </aside>
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
