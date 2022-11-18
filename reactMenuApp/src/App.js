import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ReactTodoApp = React.lazy(() => import('./remoteApps/ReactTodoApp.jsx'));
const VueTodoApp = React.lazy(() => import('./remoteApps/VueTodoApp.jsx'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="react-todo-app">ReactTodoApp</Link>
              <Link to="vue-todo-app">VueTodoApp</Link>
            </div>
          }
        />
        <Route
          path="/react-todo-app"
          element={
            <Suspense fallback={'loading...'}>
              <ReactTodoApp />
            </Suspense>
          }
        />
        <Route
          path="/vue-todo-app"
          element={
            <Suspense fallback={'loading...'}>
              <VueTodoApp />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
