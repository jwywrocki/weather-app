import React from 'react';

export default function Search(props) {
    return (
        <div className="search__container">
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                placeholder="Enter location"
                className="search"
            ></input>
        </div>
    );
}
