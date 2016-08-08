import 'babel-polyfill';
import './styles/app.less';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
// import useScroll from 'react-router-scroll';
import configureStore from './store';
import App from "./containers/App";
import createRoutes from './routes';

const initialState = {};

const store = configureStore(initialState, hashHistory);
const rootRoute = {
    component: App,
    childRoutes: createRoutes(store),
};
const history = syncHistoryWithStore(hashHistory, store, {
    selectLocationState (state) {
        return state.get('routing').toJS();
    }
});
ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            routes={rootRoute}
        />
    </Provider>,
    document.getElementById('app')
);
