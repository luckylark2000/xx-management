import React, { useState } from 'react';
import router from "../router";
import { useRoutes } from 'react-router-dom';

const App: React.FC = () => {
  const outlet = useRoutes(router);
  return (
    <div className='app'>
      {outlet}
    </div>
  );
};

export default App;