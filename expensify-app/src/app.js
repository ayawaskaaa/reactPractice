import ReactDOM from "react-dom";
import React from "react";
import "./styles/styles.scss";
import "normalize.css/normalize.css"
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import {setTextFilter} from "./actions/filters";
import {addExpense} from "./actions/expenses"
import {Provider} from "react-redux";
const appStore = configureStore();

appStore.dispatch(addExpense({description: "Rent bill", amount: 100, createAt:1}));
appStore.dispatch(addExpense({description: "Coffee bill", amount: 222, createAt:6}));
appStore.dispatch(addExpense({description: "Mobile bill", amount: 555, createAt:3}));

//appStore.dispatch(setTextFilter("rent"));

const jsx = (
    <Provider store={appStore}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render( jsx, document.getElementById("app"));