import React, { useContext } from 'react';
import {Store} from "../Store";

const NewPost = props => {
    const { state, dispatch } = useContext(Store);

    const handleTitleChange = e => dispatch({ type: 'CHANGE_TITLE', payload: e.target.value });
    const handleDescChange = e => dispatch({ type: 'CHANGE_DESC', payload: e.target.value });
    const handleBodyChange = e => dispatch({ type: 'CHANGE_BODY', payload: e.target.value });
    const handleTagsChange = e => dispatch({ type: 'CHANGE_TAGS', payload: e.target.value });

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
                                        <input className="input is-large"
                                               type="text"
                                               placeholder="Title"
                                               autoFocus=""
                                               name="title"
                                               value={state.formTitle}
                                               onChange={handleTitleChange}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large"
                                               type="text"
                                               placeholder="Description"
                                               name="desc"
                                               value={state.formDesc}
                                               onChange={handleDescChange}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <div className="control">
                                        <textarea
                                            class="textarea"
                                            placeholder="The body here..."
                                            name="body"
                                            value={state.formBody}
                                            onChange={handleBodyChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control">
                                        <input className="input is-large"
                                               type="text"
                                               placeholder="Tags"
                                               autoFocus=""
                                               name="tags"
                                               value={state.formTags}
                                               onChange={handleTagsChange}
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

export default NewPost;