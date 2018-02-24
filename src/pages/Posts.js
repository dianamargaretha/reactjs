import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './../index.css';

/* List of Post of Each User */
export default class Posts extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
            .then(response=>response.json())
            .then(items=>this.setState({items}))
    }
    render() {
        console.log(this.props)
        let items = this.state.items
        return (
            <div>
                <h2>This is List of Post of Each User where usersId = 1</h2>
                <ul className="list-wrap">
                    {items.map(item =>
                        <Post key={item.id} post={item} />)}
                </ul>
            </div>
        )
    }
}

const Post = (props) => <li>{props.post.title}</li>