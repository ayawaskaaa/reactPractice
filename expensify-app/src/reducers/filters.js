import moment from "moment";

const filterDefaultState = {
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
};
export const SORT_BY_DATE = "date";
export const SORT_BY_AMOUNT = "amount";
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case "SET_START_DATE":
            return {...state, startDate: action.startDate};
        case "SET_END_DATE":
            return {...state, endDate: action.endDate};
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

export default filterReducer;