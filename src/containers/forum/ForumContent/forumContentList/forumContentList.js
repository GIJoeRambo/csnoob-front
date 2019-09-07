import React, {Fragment} from 'react'

const ForumContentList = (props) =>{
    return (
        <Fragment>
            <div className="col-full">
                <div className="forum-header">
                    <div className="forum-details">
                        <h1>{props.title}</h1>
                        <p className="text-lead">{props.description}</p>
                    </div>
                    {props.isShowButton?<button disabled={props.PostThreadButtonDisabled} onClick={props.PostThreadClick} className="btn-green btn-small">Post a thread</button>:null}
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
