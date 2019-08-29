import React from 'react';
const forumItem = (props) => {
    return (
        <div className="forum-listing">
            <div className="forum-details">

                <div className="text-xlarge forum-item" onClick={props.click}>{props.title}</div>
                <p>{props.subtitle}</p>
            </div>

            <div className="threads-count">
                <p><span className="count">{props.threadNum}</span> thread</p>
            </div>
        </div>
    )
}

export default forumItem
