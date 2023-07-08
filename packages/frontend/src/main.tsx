import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MathJaxContext } from 'better-react-mathjax';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <BrowserRouter>
      <MathJaxContext>
        <App />
      </MathJaxContext>
    </BrowserRouter>
  </StrictMode>
);
