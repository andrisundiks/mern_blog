import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewPost from "./NewPost";
import PostBox from "./PostBox";

const Navbar = props => {

    return (
        <Router>
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                    <img src="https://i.ibb.co/Z1QStvn/robin-hat2.png" width="112" height="28" alt="Robin hat" />
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item">Home</Link>
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
                            <Link to='/new' className="button is-light">
                                New
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