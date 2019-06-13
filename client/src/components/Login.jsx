import React, { useContext } from 'react';
import {Store} from "../Store";
import {loginUser} from "../helpers/api";
import axios from 'axios';

const Login = () => {
    const { state, dispatch } = useContext(Store);

    const handleUserChange = e => dispatch({ type: 'CHANGE_USERNAME', payload: e.target.value });
    const handlePassChange = e => dispatch({ type: 'CHANGE_PASSWORD', payload: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        const credentials = {
            username: state.loginUser,
            password: state.loginPass
        };
        axios.post('/api/users/login', {
            username: credentials.username,
            password: credentials.password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-grey">Log in</h3>
                        <p className="subtitle has-text-grey">Admin restricted</p>
                        <div className="box">
                            <figure className="avatar">
                                <img src="https://placehold.it/128x128"/>
                            </figure>
                            <form onSubmit={handleSubmit}>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large"
                                               type="text"
                                               placeholder="Username"
                                               autoFocus=""
                                               name="loginUser"
                                               value={state.loginUser}
                                               onChange={handleUserChange}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large"
                                               type="text"
                                               placeholder="Password"
                                               name="loginPass"
                                               value={state.loginPass}
                                               onChange={handlePassChange}
                                        />
                                    </div>
                                </div>
                                <input type="submit"
                                       className="button is-block is-info is-large is-fullwidth"
                                       value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;
