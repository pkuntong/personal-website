import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import './index.css'

const stagewiseConfig = {
  plugins: []
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (process.env.NODE_ENV === 'development') {
  const toolbarRoot = document.createElement('div');
  toolbarRoot.id = 'stagewise-toolbar-root';
  document.body.appendChild(toolbarRoot);
  ReactDOM.createRoot(toolbarRoot).render(
    <React.StrictMode>
      <StagewiseToolbar config={stagewiseConfig} />
    </React.StrictMode>
  );
}
