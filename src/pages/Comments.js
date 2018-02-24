import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

/* The detail of each post and its comment */

export  default  class Comments extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response=>response.json())
            .then(items=>this.setState({items}))
    }
    render() {
        let items = this.state.items
        return (
            <div>
                <h2>This is The detail of each post and its comment where postId = 1</h2>
                <ul className="list-wrap">
                    {items.map(item =>
                        <Comment key={item.id} comment={item} />)}
                </ul>
            </div>
        )
    }
}

const Comment = (props) => <li>{props.comment.body}</li>