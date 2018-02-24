import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';


/* List of photos from an album */

export default class Photos extends React.Component {
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
                <h2>This is List of photos from an album where albumId = 1</h2>
                {items.map(item =>
                    <Photo key={item.id} photo={item} />)}
            </div>
        )
    }
}

const Photo = (props) => <img src={props.photo.thumbnailUrl} />