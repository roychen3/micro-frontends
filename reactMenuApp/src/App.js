import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './app.scss';
import Layout from './Layout.jsx';
const ReactTodoApp = React.lazy(() => import('./remoteApps/ReactTodoApp.jsx'));
const VueTodoApp = React.lazy(() => import('./remoteApps/VueTodoApp.jsx'));

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
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
      </Layout>
    </Router>
  );
};

export default App;
