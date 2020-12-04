import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import { Provider } from 'react-redux';
import ConfigureStore from './store/configureStore';
const store = ConfigureStore();
ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>

    ,
    document.getElementById('app')
);


