import React from 'react';
const ForumList = (props) =>{
    return (
        <div className="col-full">
            <div className="forum-list">

                <h2 className="list-title">
                    <a href={props.href}>{props.title}</a>
                </h2>
                {props.children}
            </div>
        </div>
    )
}

export default ForumList

