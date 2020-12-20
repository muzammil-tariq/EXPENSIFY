import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selector/expenses-total';
import expenses from '../selector/expenses';

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
    const expensesText = expensesCount > 1 ? 'expenses' : 'expense';
    return (
        <div>

            <h1>viewing {expensesCount} {expensesText} totalling {expensesTotal}</h1>
        </div>
    );
};
const mapStateToProps = (state) => {
    const visibleExpenses = expenses(state.expenses, state.filters);
    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);