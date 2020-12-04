import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseSelector from '../selector/expenses';
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        { props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>


);
const mapStateToprops = (state) => {
    return {
        expenses: ExpenseSelector(state.expenses, state.filters)
    };
};
export default connect(mapStateToprops)(ExpenseList);