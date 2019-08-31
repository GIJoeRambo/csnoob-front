import React from 'react'
import personLogo from '../../../../assets/images/forum_thread/criminal.jpg'
const ThreadComment = () =>{
    return (
        <div className="post">

            <div className="user-info">
                <div style={{color:'#57AD8D'}} className="user-name">Ray-Nathan James</div>

                <div>
                    <img className="avatar-large" src={personLogo} alt="criminal"/>
                </div>

                <div>
                    Floor 1
                </div>


            </div>

            <div className="post-content">
                <div>
                    <p>
                        <a href="/user/Joker" className="">@Joker</a> is right, they're not the same.
                    </p>
                    <p>
                        They are different plants from the same family (mustard/cabbage).
                    </p>
                </div>
            </div>


            <div className="post-date text-faded">
                6 hours ago
            </div>
        </div>
    )
}

export default ThreadComment
