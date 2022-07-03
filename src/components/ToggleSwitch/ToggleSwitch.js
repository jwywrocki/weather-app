import React from 'react';
import './ToggleSwitch.css';

export const ToggleSwitch = (props) => {
    return (
        <div className="toggle-switch">
            <input type="checkbox" className="checkbox" name={props.label} id={props.label} />
            <label className="label" htmlFor={props.label}>
                <span className="param_1">{props.param_1}</span>
                <span className="param_2">{props.param_2}</span>
                <span className="switch"></span>
            </label>
        </div>
    );
};
