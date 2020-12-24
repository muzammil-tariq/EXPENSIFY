import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ExpenseReducer from '../reducer/expenses';
import FilterReducer from '../reducer/filters';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: ExpenseReducer,
            filters: FilterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
    return store;
};
export default ConfigureStore;