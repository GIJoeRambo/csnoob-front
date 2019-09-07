import React from 'react'


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
                     src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png"
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
