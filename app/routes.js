// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business

import {getAsyncInjectors} from './utils/asyncInjectors';
import {push} from 'react-router-redux';

const errorLoading = (err) => {
    console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
    cb(null, componentModule.default);
};

export default function createRoutes(store) {
    // create reusable async injectors using getAsyncInjectors factory
    const {injectReducer, injectSagas} = getAsyncInjectors(store);


    return [
        {
            path: '/',
            onEnter: ({ params }, replace) => replace('/home')//重定向
        }, {
            path: 'home',
            getComponent(nextState, cb) {
                require.ensure([], function (require) {
                    cb(null, require('./containers/HomePage').default);
                }, 'home');
            }
        },{
            path: '/about',
            getComponent(nextState, cb) {
                require.ensure([], function (require) {
                    cb(null, require('./containers/About').default);
                }, 'about');
            },
        }, {
            path: '/cust',
            getComponent(nextState, cb) {
                require.ensure([], function (require) {
                    const CustManger = require('./containers/CustManger')
                    const reducer = require('./containers/CustManger/reducer')
                    injectReducer('custManger', reducer.default)
                    cb(null, CustManger.default)
                }, 'custManger');
            },
        },{
            path: '**',
            name: '404'
        }
    ];
}
