import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../Action/expenses';
import { connect } from 'react-redux';
const AddExpensePage = ({ dispatch, history }) => {
    return (
        <ExpenseForm
            onFormSubmit={(expenses) => {
                dispatch(addExpense(expenses));
                history.push('/')
            }}
        />
    )
};
export default connect()(AddExpensePage);