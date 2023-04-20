import React, { Suspense } from 'react';
import GetRouter from "../router";
import { HashRouter } from 'react-router-dom';
import Loading from '../load/Loading';
import BeforeRouter from '../components/AuthRouter.tsx';

const App: React.FC = () => {
  return (
    //Suspense用来帮助实现懒加载
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <BeforeRouter>
          <GetRouter />
        </BeforeRouter>

      </HashRouter >
    </Suspense>
  );
};

export default App;