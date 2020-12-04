import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import { Provider } from 'react-redux';
import ConfigureStore from './store/configureStore';
import 'normalize-css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
const store = ConfigureStore();
console.log('fg');
ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>

    ,
    document.getElementById('app')
);


