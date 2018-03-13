import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, Middleware } from 'redux';
import { Provider } from 'react-redux';

import logger from 'redux-logger';

import { BrowserRouter, Route } from 'react-router-dom';

import reducers from './redux/reducers';

import createSagaMiddleware from 'redux-saga';
import { mainSaga } from './sagas/main';

import Home from './components/Home';
import './index.css';

// Building the sagas middleware
const sagas = createSagaMiddleware();

// Building the array with all the middlewares
const middlewares: Middleware[] = [sagas, logger];

// Build the store with the reducers and the middlewares
const store = createStore(
    combineReducers({
        ...reducers
    }),
    applyMiddleware(...middlewares)
);

// Running the main entry point for sagas
sagas.run(mainSaga);

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
