import React from 'react'
import personLogo from '../../../../assets/images/forum_thread/Lego.png'
const ThreadContent = (props) =>{
    return (
        <div className="post">

            <div className="user-info">
                <div style={{color:"#57AD8D"}} className="user-name">{props.Author}</div>

                <div>
                    <img className="avatar-large" src={personLogo} alt="lego"/>
                </div>

                <div>
                    Author
                </div>


            </div>

            <div className="post-content">
                <div style={{whiteSpace: 'pre-line'}}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}


export default ThreadContent
