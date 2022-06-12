import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <div className="search__container">
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    onKeyPress={this.props.onKeyPress}
                    placeholder="Enter location"
                    className="search"
                ></input>
            </div>
        );
    }
}
