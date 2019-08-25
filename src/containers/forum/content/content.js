import React from 'react'
import ForumContentList from "../../../components/forumContentList/forumContentList";
import ForumContentItem from "../../../components/forumContentList/forumContentItem/forumContentItem";

const Content = () => {
    return (
        <ForumContentList
            title="Cooking"
            description="Discuss your passion for food and cooking"
        >
            <ForumContentItem/>
            <ForumContentItem/>
            <ForumContentItem/>
            <ForumContentItem/>

        </ForumContentList>
    )
}

export default Content
