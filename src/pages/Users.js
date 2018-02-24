import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

/* List of User */
export default class Users extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(items=>this.setState({items}))
    }
    render() {
        let items = this.state.items
        return (
            <div>
                <h2>This is List of Users</h2>
                <ul className="list-wrap">
                    {items.map(item =>
                        <User key={item.id} user={item} />)}
                </ul>
            </div>
        )
    }
}

const User = (props) => <li>{props.user.name}</li>

