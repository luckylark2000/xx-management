import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './view/App'
import { Provider } from 'react-redux'
import store from './store/store'
//初始化样式
import "reset-css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
