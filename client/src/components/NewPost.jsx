import React from 'react';

const NewPost = props => {

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-grey">Create a new post</h3>
                        <p className="subtitle has-text-grey">Admin restricted</p>
                        <div className="box">
                            <figure className="avatar">
                                <img src="https://placehold.it/128x128"/>
                            </figure>
                            <form>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="text" placeholder="Title"
                                               autoFocus="" />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="password" placeholder="Description"/>
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <textarea class="textarea" placeholder="The body here...">
                                        </textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large" type="text" placeholder="Tags"
                                               autoFocus="" />
                                    </div>
                                </div>
                                <input type="submit" className="button is-block is-info is-large is-fullwidth" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default NewPost;