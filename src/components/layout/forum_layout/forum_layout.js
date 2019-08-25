import React,{Fragment} from 'react';

const ForumLayout = (props) =>{
    return (
        <Fragment>
            <div className="container">
                <div className="col-full">
                    {props.children}
                </div>
            </div>
            <div className="forum-stats desktop-only">
                <hr/>
                    <ul>
                        <li><i className="fa fa-comments-o"/>{props.threadNum} threads</li>
                        <li><i className="fa fa-comment-o"/>{props.postNum} posts</li>
                    </ul>
            </div>
        </Fragment>

    )
}

export default ForumLayout
