import React, {Fragment} from 'react'

const ForumContentList = (props) =>{
    return (
        <Fragment>
            <div className="col-full push-top">
                <div className="forum-header">
                    <div className="forum-details">
                        <h1>{props.title}</h1>
                        <p className="text-lead">{props.description}</p>
                    </div>
                    <a href="/" className="btn-green btn-small">Start a thread</a>
                </div>
            </div>
            <div className="col-full">
                <div className="thread-list">

                    <h2 className="list-title">Threads</h2>
                    {props.children}
                </div>
            </div>
        </Fragment>

    )
}

export default ForumContentList
