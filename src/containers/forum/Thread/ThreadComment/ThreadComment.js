import React from 'react'
import personLogo from '../../../../assets/images/forum_thread/criminal.jpg'
const ThreadComment = (props) =>{
    return (
        <div className="post">

            <div className="user-info">
                <div style={{color:'#57AD8D'}} className="user-name">{props.name}</div>

                <div>
                    <img className="avatar-large" src={personLogo} alt="criminal"/>
                </div>

                <div>
                    Floor {props.floor}
                </div>


            </div>

            <div className="post-content">
                {props.content}
            </div>


            <div className="post-date text-faded">
                {props.postDate}
            </div>
        </div>
    )
}

export default ThreadComment
