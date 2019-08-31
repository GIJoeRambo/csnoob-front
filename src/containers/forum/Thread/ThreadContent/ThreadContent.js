import React from 'react'
import personLogo from '../../../../assets/images/forum_thread/Lego.png'
const ThreadContent = (props) =>{
    return (
        <div className="post">

            <div className="user-info">
                <div style={{color:"#57AD8D"}} className="user-name">Robin</div>

                <div>
                    <img className="avatar-large" src={personLogo} alt="lego"/>
                </div>

                <div>
                    Author
                </div>


            </div>

            <div style={{whiteSpace: 'pre-line'}} className="post-content">
                <div>
                    {props.content}
                </div>
            </div>
        </div>
    )
}


export default ThreadContent
