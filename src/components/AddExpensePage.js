import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../Action/expenses';
import { connect } from 'react-redux';
class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        console.log(expense)
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <ExpenseForm
                onFormSubmit={this.onSubmit}
            />
        )
    }

};
const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => dispatch(startAddExpense(expense))
    }

}
export default connect(undefined, mapDispatchToProps)(AddExpensePage);