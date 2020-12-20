import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './expenseSummary';
const ExpenseDashboardePage = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    )
};
export default ExpenseDashboardePage;