import React, { useContext } from 'react';
import {Store} from "../Store";
import {loginUser} from "../helpers/api";

const Login = () => {
    const { state, dispatch } = useContext(Store);

    const handleUserChange = e => dispatch({ type: 'CHANGE_USERNAME', payload: e.target.value });
    const handlePassChange = e => dispatch({ type: 'CHANGE_PASSWORD', payload: e.target.value });

    const handleSubmit = () => {
        const credentials = {
            username: state.loginUser,
            password: state.loginPass,
        };
        dispatch({ action: 'LOG_IN', payload: loginUser(credentials)});
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
