import {addExpense, editExpense, removeExpense} from "../../actions/expenses"

test('should setup remove expense action object', () => {
    const action = removeExpense({id: "123acd"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123acd"
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense("123acd", {amount: 12});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123acd",
        "updates": {
            amount: 12
        }
    });
});

test('should setup add expense action object with provided values', () => {
    let expense = {
        description: "descr",
        amount: 100,
        createAt: 1234,
        note: "note"
    };
    const action = addExpense(expense);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "descr",
            amount: 100,
            createAt: 1234,
            note: "note"
        }
    });
});

test('should setup add expense action object with default values', () => {

    const action = addExpense({});
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createAt: 0,
            note: ""
        }
    });
});