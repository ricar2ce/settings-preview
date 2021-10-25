import React from 'react';
import ReactDOM from 'react-dom';
import {WrapperProvider} from "./hooks/useWrapper";

import 'antd/dist/antd.css';
import "@fontsource/fira-sans";

import './index.css'
import App from "./App";

ReactDOM.render(
  <div>
      <WrapperProvider>
          <App />
      </WrapperProvider>
  </div>,
  document.getElementById('root')
);

