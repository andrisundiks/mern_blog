import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewPost from "./NewPost";
import PostBox from "./PostBox";

const Navbar = props => {

    return (
        <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                    <img src="https://i.etsystatic.com/6397696/r/il/1121b3/915740788/il_fullxfull.915740788_pmay.jpg" width="112" height="28" />
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">
                        <Link to='/'>Home</Link>
                    </a>
                    <a className="navbar-item">
                        About
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Github</strong>
                            </a>
                            <Link to='/new'>
                                <a className="button is-light">
                                    New
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
            <Route path="/" exact component={PostBox}/>
            <Route path="/new" component={NewPost} />
        </Router>
    )
};

export default Navbar;