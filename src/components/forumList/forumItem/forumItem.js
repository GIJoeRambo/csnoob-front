import React from 'react';

const forumItem = (props) => {
    console.log(props)
    return (
        <div className="forum-listing">
            <div className="forum-details">
                <a className="text-xlarge" href={props.href}>{props.title}</a>
                <p>{props.subtitle}</p>
            </div>

            <div className="threads-count">
                <p><span className="count">{props.threadNum}</span> thread</p>
            </div>
        </div>
    )
}

export default forumItem
