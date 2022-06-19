import React from 'react';

export const Search = (props) => {
    return (
        <>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
                placeholder="Enter location"
                className="search__input"
            ></input>
        </>
    );
};
