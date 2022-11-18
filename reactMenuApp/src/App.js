import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ReactTodoApp = React.lazy(() => import('./remoteApps/ReactTodoApp.jsx'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="react-todo-app">go to ReactTodoApp</Link>
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
      </Routes>
    </Router>
  );
};

export default App;
