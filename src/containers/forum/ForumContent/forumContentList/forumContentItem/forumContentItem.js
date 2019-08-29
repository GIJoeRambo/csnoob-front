import React from 'react'


const ForumContentItem = (props) =>{
    return (
        <div className="thread">
            <div>
                <p>
                    <a href="#">{props.title}</a>
                </p>
                <p className="text-faded text-xsmall">
                    By <a href="/">{props.postAuthor}</a>, {props.when}.
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
                            <a href="#">{props.LastReplyName}</a>
                        </p>
                        <p className="text-xsmall text-faded">{props.LastReplyTime}</p>
                    </div>
            </div>
        </div>
    )
}


export default ForumContentItem
