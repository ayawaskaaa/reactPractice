import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css"

const ExpenseDashboardPage = () =>(
    <div> Dashboard</div>
);
const AddExpensePage = () =>(
    <div> AddExpensePage</div>
);
const EditExpensePage = () =>(
    <div> EditExpensePage</div>
);
const HelpPage = () =>(
    <div> HelpPage</div>
);
const NotFoundPage = () =>(
    <div> 404!</div>
);
const routes = (
    <BrowserRouter>
        <div>
            <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
            <Route path={"/create"} component={AddExpensePage}/>
            <Route path={"/edit"} component={EditExpensePage}/>
            <Route path={"/help"} component={HelpPage}/>
        </div>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById("app"));