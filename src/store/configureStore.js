import { createStore, combineReducers } from 'redux';
import ExpenseReducer from '../reducer/expenses';
import FilterReducer from '../reducer/filters';
const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            expenses: ExpenseReducer,
            filters: FilterReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};
export default ConfigureStore;