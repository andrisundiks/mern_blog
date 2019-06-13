import React from 'react';

const SinglePost = props => {
    const generateTags = () => {
        const individualTags = props.post.tags.split(' ');
        return individualTags.map( tag => {
            return <span className="tag is-info tag-margin">
                        { tag }
                    </span>
        })
    };

    const parseDate = () => {
        const string = props.post.date.split('T')
        const date = string[0];
        const time = string[1].slice(0, 5);
        return `${date} ${time}`;
    };

    return (
        <div className="card tile" key={props.key}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="https://i.ibb.co/wWPfQFv/small-robin.png" alt="Small robin"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{props.post.title}</p>
                        <p className="subtitle is-6">Andris</p>
                    </div>
                </div>

                <div className="content">
                    { props.post.body }
                    <br/>
                    { generateTags() }
                    <br/>
                    <time dateTime={props.post.date}>{ parseDate() }</time>
                </div>
            </div>
        </div>
    )
};

export default SinglePost;