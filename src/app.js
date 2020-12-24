import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Router/AppRouter';
import { Provider } from 'react-redux';
import ConfigureStore from './store/configureStore';
import { setStartExpenses } from './Action/expenses';
import 'normalize-css/normalize.css';
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
const store = ConfigureStore();

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
store.dispatch(setStartExpenses()).then(() => {
    ReactDOM.render(<Provider store={store}><AppRouter /></Provider>, document.getElementById('app'));
})



