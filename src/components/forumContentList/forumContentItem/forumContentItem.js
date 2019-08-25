import React from 'react'


const ForumContentItem = (props) =>{
    return (
        <div className="thread">
            <div>
                <p>
                    <a href="thread.html">How can I chop onions without crying?</a>
                </p>
                <p className="text-faded text-xsmall">
                    By <a href="profile.html">Joseph Kerr</a>, yesterday.
                </p>
            </div>

            <div className="activity">
                <p className="replies-count">
                    1 reply
                </p>

                <img className="avatar-medium"
                     src="http://i0.kym-cdn.com/photos/images/facebook/000/010/934/46623-batman_pikachu_super.png"
                     alt=""/>

                    <div>
                        <p className="text-xsmall">
                            <a href="profile.html">Bruce Wayne</a>
                        </p>
                        <p className="text-xsmall text-faded">2 hours ago</p>
                    </div>
            </div>
        </div>
    )
}


export default ForumContentItem
