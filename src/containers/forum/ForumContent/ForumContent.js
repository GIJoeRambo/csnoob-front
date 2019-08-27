import React from 'react'
import ForumContentList from "../../../components/forumContentList/forumContentList";
import ForumContentItem from "../../../components/forumContentList/forumContentItem/forumContentItem";

const ForumContent = () => {
    return (
        <ForumContentList
            title="Cooking"
            description="Discuss your passion for food and cooking"
        >
            <ForumContentItem
                title="What is IT?"
                postAuthor="Oliver Deng"
                when="Yesterday"
                replyNum="1"
                LastReplyName="Richard Wang"
                LastReplyTime="2 hours ago"
            />
            <ForumContentItem
                title="What is IT?"
                postAuthor="Oliver Deng"
                when="Yesterday"
                replyNum="1"
                LastReplyName="Richard Wang"
                LastReplyTime="2 hours ago"
            />


        </ForumContentList>
    )
}

export default ForumContent
