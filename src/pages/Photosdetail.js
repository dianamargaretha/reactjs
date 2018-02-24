import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

/* The detail of photo */

export default class Photosdetail extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(response=>response.json())
            .then(items=>this.setState({items}))
    }
    render() {
        let items = this.state.items
        return (
            <div>
                <h2>This is The detail of photo where albumId = 1</h2>
                <ul className="list-wrap">
                    {items.map(item =>
                        <Photodetail key={item.id} photodetail={item} />)}
                </ul>
            </div>
        )
    }
}

const Photodetail = (props) => <li> {props.photodetail.title} </li>