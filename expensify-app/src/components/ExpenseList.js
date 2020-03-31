import React from "react";
import {connect} from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectExpenses from "../selectors/expenses"

const ExpenseList = (props) => (
    <div>
        <ol>
            {props.expenses.map((ex)=>(
                <ExpensesListItem
                    key = {ex.id}
                    {...ex}
                />
            ) )}
        </ol>

    </div>
);
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
};
export default connect(mapStateToProps)(ExpenseList);
