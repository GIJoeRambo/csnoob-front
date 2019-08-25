import React from 'react';
const ForumList = () =>{
    return (
        <div className="forum-list">

            <h2 className="list-title">
                <a href="category.html">Feedback & Information</a>
            </h2>

            <div className="forum-listing">
                <div className="forum-details">
                    <a className="text-xlarge" href="forum.html">Announcements</a>
                    <p>Important announcements about the forum.</p>
                </div>

                <div className="threads-count">
                    <p><span className="count">1</span> thread</p>
                </div>

                <div className="last-thread">
                    <img className="avatar"
                         src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Frah?alt=media&token=7ad21914-a4f4-4ad0-add6-17e6d3ae9679"
                         alt=""/>
                        <div className="last-thread-details">
                            <a href="thread.html">Post Reactions</a>
                            <p className="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a month ago</p>
                        </div>
                </div>
            </div>

            <div className="forum-listing">
                <div className="forum-details">
                    <a href="forum.html" className="text-xlarge">Questions & Feedback</a>
                    <p>Ask your questions and drop your feedback here</p>
                </div>

                <div className="threads-count">
                    <p className="count">73</p> threads
                </div>

                <div className="last-thread">
                    <img className="avatar" src="https://www.sideshowtoy.com/photo_9030371_thumb.jpg" alt=""/>
                        <div className="last-thread-details">
                            <a href="thread.html">Where is the sign in button?</a>
                            <p className="text-xsmall">By <a href="profile.html">Joseph Kerr</a>, three hours ago</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ForumList

