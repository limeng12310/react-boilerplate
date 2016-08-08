// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';
import { push } from 'react-router-redux';
const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      onEnter: ({ params }, replace) => replace('/main')//重定向
    }, {
      path: '/main',
      name: 'home',
      getComponent(nextState, cb) {
        System.import('./containers/HomePage')
            .then(loadModule(cb))
            .catch(errorLoading);
      },
    }, {
      path: '/about',
      name: 'about',
      getComponent(nextState, cb) {
        System.import('./containers/About')
            .then(loadModule(cb))
            .catch(errorLoading);
      },
    }, {
      path: '/cust',
      name: 'cust',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('./containers/CustManger/reducer'),
          System.import('./containers/CustManger'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, component]) => {
          injectReducer('custManger', reducer.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
