import {createStore, combineReducers} from "redux";
import uuid from "uuid";

const addExpense = (
    {
        description = "",
        note = "",
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
const SORT_BY_AMOUNT = "amount";
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});
const SORT_BY_DATE = "date";
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});
const setTextFilter = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});
const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
});
const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
});
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(
        (expense) => {
            const startDateMatch = typeof startDate !== "number" || expense.createAt >= startDate;
            const endDateMatch = typeof endDate !== "number" || expense.createAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
            return startDateMatch && endDateMatch && textMatch;
        }
    ).sort((a, b) => {
        if (sortBy === "date"){
            return a.createAt < b.createAt ? 1: -1;
        }else if (sortBy === "amount"){
            return a.amount < b.amount ? 1: -1;
        }
    });
};
const filterDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case "SET_START_DATE":
            return {...state, startDate: action.date};
        case "SET_END_DATE":
            return {...state, startDate: action.date};
        case "SORT_BY_DATE":
            return {...state, sortBy: SORT_BY_DATE};
        case "SORT_BY_AMOUNT":
            return {...state, sortBy: SORT_BY_AMOUNT};
        case "SET_TEXT_FILTER":
            return {...state, text: action.text};
        default:
            return state;
    }
};
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense];
        case "REMOVE_EXPENSE":
            return state.filter(({id}) => id !== action.id);
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});
const firstElement = store.dispatch(addExpense({description: "Rent", amount: 100}));
const secondElement = store.dispatch(addExpense({description: "Coffee", amount: 222}));

/*store.dispatch(removeExpense({id: firstElement.expense.id}));
store.dispatch(editExpense(secondElement.expense.id, {amount: 500}))
const user = {
    name: "name",
    surname: "sur"
};*/
/*
store.dispatch(setTextFilter("rent"));
store.dispatch(setTextFilter(""));
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
*/

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());

store.dispatch(setEndDate(150));
store.dispatch(setEndDate());