import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './reducers/index';

import Home from './components/Home';
import './index.css';

// Building the array with all the middlewares
const middlewares: Middleware[] = [logger];

// Build the store with the reducers and the middlewares
const store = createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(...middlewares)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
