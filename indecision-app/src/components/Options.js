import React from "react";
import Option from "./Option.js";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your options</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
        </div>
        {props.options.length === 0 && <p className="widget-message">Please add an option to get started</p>}
        <ol>
            {props.options.map((op, index) =>
                <Option handleDeleteOption={props.handleDeleteOption}
                        key={op}
                        option={op}
                        count={index+1}
                />
                )}
        </ol>
    </div>)
export default Options