import React from "react"
import moment from "moment";
import {SingleDatePicker} from "react-dates";
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : 0,
            note: props.expense ? props.expense.note : "",
            createAt: props.expense ? moment(props.expense.createAt) : moment(),
            calendarFocused: false,
            error: ""
        };
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}))
        }
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    };
    onDateChange = (createAt) => {
        if (createAt) {
            this.setState(() => ({createAt}));
        }
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: "Please provide description and amount."}))
        } else {
            this.setState(() => ({error: ""}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createAt: this.state.createAt.valueOf(),
                note: this.state.note
            });
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    render() {
        return (
            <div>
                Expense form
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={this.onNoteChange}
                        value={this.state.note}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        );
    };
}