import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import { appConnector } from './components/app/connector';

const MyApp = appConnector(App);

ReactDOM.render(
    <Provider store={ store }>
        <MyApp />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
