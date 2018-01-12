import React from 'react';
import ReactDOM from 'react-dom';

// Redux Modules
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers/index';

// DevTools Extension
import { devToolsEnhancer } from 'redux-devtools-extension';

// Components
import AppContainer from './components/AppContainer';

// Redux (Big Master Object). Creating Store
const store = createStore(allReducers, devToolsEnhancer());

// DOM render
ReactDOM.render(
    // Provider passes store data into all child components
    <Provider store={store}>
        <AppContainer/>
    </Provider>,
    document.getElementById('root')
);