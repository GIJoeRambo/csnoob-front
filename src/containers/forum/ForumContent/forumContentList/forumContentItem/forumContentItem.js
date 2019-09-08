import React from 'react'
import personLogo from '../../../../../assets/images/forum_thread/people.png'

const ForumContentItem = (props) =>{
    return (
        <div className="thread">
            <div>
                <div onClick={props.titleClick} className="forum-item"><p>{props.title}</p></div>
                <p className="text-faded text-xsmall">
                    By <span className="forum-item">{props.postAuthor}</span>, {props.when}.
                </p>
            </div>

            <div className="activity">
                <p className="replies-count">
                    {props.replyNum} reply
                </p>

                <img className="avatar-medium"
                     src={personLogo}
                     alt=""/>

                    <div>
                        <p className="text-xsmall">
                            <span className="forum-item">{props.LastReplyName}</span>
                        </p>
                        <p className="text-xsmall text-faded">{props.LastReplyTime}</p>
                    </div>
            </div>
        </div>
    )
}


export default ForumContentItem
