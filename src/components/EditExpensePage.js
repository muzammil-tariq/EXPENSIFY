import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../Action/expenses';
import ExpenseForm from './ExpenseForm';
const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onFormSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/');
                }}
            />
            <button
                onClick={() => {
                    props.dispatch(removeExpense(props.expense.id))
                    props.history.push('/');
                }}
            >
                Delete
        </button>
        </div>
    )
};
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});
export default connect(mapStateToProps)(EditExpensePage);