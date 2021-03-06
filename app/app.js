import 'babel-polyfill';
import './styles/app.less';
import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import App from "./containers/App";
import createRoutes from './routes';
const initialState = {};
window.GLOBAL = {};
const store = configureStore(initialState, hashHistory);
const rootRoute = {
    component: App,
    childRoutes: createRoutes(store),
};
const history = syncHistoryWithStore(hashHistory, store, {
    selectLocationState (state) {
        return state.routing;
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={history}
            routes={rootRoute}
        />
    </Provider>,
    document.getElementById('app-root')
);