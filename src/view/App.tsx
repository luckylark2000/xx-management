import React, { Suspense } from 'react';
import GetRouter from "../router";
import { HashRouter, useRoutes } from 'react-router-dom';
import Loading from '../load/Loading';
const App: React.FC = () => {
  return (
    //Suspense用来帮助实现懒加载
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <GetRouter />
      </HashRouter >
    </Suspense>

  );
};

export default App;