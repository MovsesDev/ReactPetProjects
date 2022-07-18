import React from 'react';
import ReactDOM from 'react-dom/client';
import client from './apollo/client';
import App from './App';
import {ApolloProvider} from '@apollo/client'

ReactDOM.createRoot(document.getElementById('root')).render(<ApolloProvider client={client}> <App /></ApolloProvider>)
