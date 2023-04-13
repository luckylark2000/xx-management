import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/App'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import Loading from './load/Loading'
import { Provider } from 'react-redux'
import store from './store/store'

import "reset-css"
//BrowserRouter实现路由在web页面上展现，少了就不能显示出来
//Suspense用来帮助实现懒加载
import routes from './router'
//const BrowserRouter = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
