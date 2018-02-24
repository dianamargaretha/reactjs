import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import './index.css';

import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import Comments from "./pages/Comments";
import Photos from "./pages/Photos";
import Photosdetail from "./pages/Photosdetail";

/* Home component */
const Home = () => (<div></div>)

/* App component */
class App extends React.Component {
    constructor() {
        super();
        this.state = { items: [] };
    }

    render() {
        return (
            <div className='row'>
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"><h3>Project name</h3></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/">Homes</Link></li>
                                <li><Link to="/users">List of Users</Link></li>
                                <li><Link to="/posts">List of Posts of each user</Link></li>
                                <li><Link to="/albums">List of Albums of each user</Link></li>
                                <li><Link to="/comments">The detail of each post and its comment</Link></li>
                                <li><Link to="/photos">List of photos from an album</Link></li>
                                <li><Link to="/photosdetail">The detail of photo</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-2 sidebar">
                            <ul className="nav nav-sidebar">
                                <li><Link to="/">Homes</Link></li>
                                <li><Link to="/users">List of Users</Link></li>
                                <li><Link to="/posts">List of Posts of each user</Link></li>
                                <li><Link to="/albums">List of Albums of each user</Link></li>
                                <li><Link to="/comments">The detail of each post and its comment</Link></li>
                                <li><Link to="/photos">List of photos from an album</Link></li>
                                <li><Link to="/photosdetail">The detail of photo</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            <h1 className="page-header">Dashboard</h1>
                            <div className="table-responsive">
                                <Route path="/" component={Home}/>
                                <Route path="/users" component={Users}/>
                                <Route path="/posts" component={Posts}/>
                                <Route path="/albums" component={Albums}/>
                                <Route path="/comments" component={Comments}/>
                                <Route path="/photos" component={Photos}/>
                                <Route path="/photosdetail" component={Photosdetail}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render ((
        <BrowserRouter >
            <App/>
        </BrowserRouter >
    ), document.getElementById('root')
)