import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

/* List of Albums of each user */
export default class Albums extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/albums?userId=1')
            .then(response=>response.json())
            .then(items=>this.setState({items}))
    }
    render() {
        let items = this.state.items
        return (
            <div>
                <h2>List of Albums of each user where userId = 1</h2>
                <ul className="list-wrap">
                    {items.map(item =>
                        <Album key={item.id} album={item} />)}
                </ul>
            </div>
        )
    }
}

const Album = (props) => <li>{props.album.title}</li>