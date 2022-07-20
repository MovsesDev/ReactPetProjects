import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={client}>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>
);

