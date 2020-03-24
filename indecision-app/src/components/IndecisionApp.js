import React from "react";
import AddOption from "./AddOption.js";
import Options from "./Options.js";
import Action from "./Action.js";
import Header from "./Header.js";
import OptionModal from "./OptionModal.js";

export default class IndecisionApp extends React.Component {
    state = {
        options: ["one", "two"],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({options: prevState.options.filter((option) => option !== optionToRemove)}));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Option should not be empty';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Such option exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    handleModalClose = () => {
        this.setState(() => ({selectedOption: undefined}));
    };

    render() {

        return (
            <div>
                <Header/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            options={this.state.options}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} handleModalClose={this.handleModalClose}/>
            </div>
        );
    }
}