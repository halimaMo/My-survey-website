import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';

//instance of our redux store
const store = createStore (() => [], {}, applyMiddleware())

ReactDOM.render(
    <Provider store={store}> <App /></Provider>, 
    document.querySelector('#root')
    );
    