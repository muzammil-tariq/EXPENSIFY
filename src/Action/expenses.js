import database from '../firebase/firebase';
export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
}

export const startAddExpense = (expenseList = {}) => {
    return (dispatch) => {
        const {
            description = '', note = '', amount = 0, createdAt = 0
        } = expenseList;
        const expense = {
            description,
            note,
            amount,
            createdAt
        };
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })

    }
}

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = (id) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id));
        });

    }
}
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
});
export const startEditExpense = (id, update) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).update(update).then(() => {
            dispatch(editExpense(id, update));
        })
    }
}

export const setExpense = (expense) => ({
    type: 'SET_EXPENSE',
    expense
})

export const setStartExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push(
                    {
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
            });
            dispatch(setExpense(expenses));
        });
    }
}