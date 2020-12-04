import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
const ExpenseDashboardePage = () => {
    return (
        <div>
            <ExpenseListFilter />
            <ExpenseList />
        </div>
    )
};
export default ExpenseDashboardePage;