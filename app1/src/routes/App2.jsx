import React, { Suspense } from 'react';

const RemoteApp = React.lazy(() => import('app2/App'));

const App2 = () => {
  return (
    <Suspense fallback={'loading...'}>
      <RemoteApp />
    </Suspense>
  );
};

export default App2;
